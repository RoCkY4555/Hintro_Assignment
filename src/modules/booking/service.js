import prisma from '../../config/database.js';
import { runPoolingEngine } from '../../engine/poolingEngine.js';
import { optimizeRoute, AIRPORT } from '../../engine/routeOptimizer.js';
import { calculatePooledPrices } from '../../engine/pricingEngine.js';
import { haversineDistance } from '../../utils/distanceUtils.js';
import { acquireLock, releaseLock } from '../../utils/lock.js';
import logger from '../../utils/logger.js';

class BookingService {
    /**
     * Create a new booking and trigger the pooling engine.
     */
    async create(data) {
        // Verify passenger exists
        const passenger = await prisma.passenger.findUnique({
            where: { id: data.passengerId },
        });
        if (!passenger) {
            throw Object.assign(new Error('Passenger not found'), { statusCode: 404 });
        }

        // Create the booking
        const booking = await prisma.booking.create({
            data: {
                passengerId: data.passengerId,
                pickupLat: data.pickupLat,
                pickupLng: data.pickupLng,
                dropoffLat: data.dropoffLat,
                dropoffLng: data.dropoffLng,
                luggageCount: data.luggageCount,
                detourToleranceKm: data.detourToleranceKm,
                status: 'PENDING',
            },
            include: { passenger: true },
        });

        // Trigger pooling engine asynchronously (don't block the response)
        setImmediate(async () => {
            try {
                await runPoolingEngine();
            } catch (err) {
                logger.error(`Async pooling error: ${err.message}`);
            }
        });

        return booking;
    }

    /**
     * Get booking by ID with ride details.
     */
    async getById(id) {
        return prisma.booking.findUnique({
            where: { id },
            include: {
                passenger: true,
                ridePassengers: {
                    include: {
                        ride: {
                            include: {
                                cab: true,
                                ridePassengers: {
                                    include: { booking: { include: { passenger: true } } },
                                    orderBy: { sequenceOrder: 'asc' },
                                },
                            },
                        },
                    },
                },
            },
        });
    }

    /**
     * Cancel a booking and re-optimize the ride if needed.
     */
    async cancel(id) {
        const booking = await prisma.booking.findUnique({
            where: { id },
            include: {
                ridePassengers: {
                    include: {
                        ride: {
                            include: {
                                cab: true,
                                ridePassengers: { include: { booking: true } },
                            },
                        },
                    },
                },
            },
        });

        if (!booking) {
            throw Object.assign(new Error('Booking not found'), { statusCode: 404 });
        }

        if (booking.status === 'CANCELLED') {
            throw Object.assign(new Error('Booking is already cancelled'), { statusCode: 400 });
        }

        if (booking.status === 'COMPLETED') {
            throw Object.assign(new Error('Cannot cancel a completed booking'), { statusCode: 400 });
        }

        // If booking is pooled into a ride, handle ride re-optimization
        const ridePassenger = booking.ridePassengers[0];

        if (ridePassenger) {
            const ride = ridePassenger.ride;
            const lockResource = `ride:${ride.id}`;
            const lock = await acquireLock(lockResource);

            if (!lock.acquired) {
                throw Object.assign(new Error('Ride is being modified, please retry'), { statusCode: 409 });
            }

            try {
                await prisma.$transaction(async (tx) => {
                    // Remove passenger from ride
                    await tx.ridePassenger.delete({
                        where: { id: ridePassenger.id },
                    });

                    // Mark booking as cancelled
                    await tx.booking.update({
                        where: { id },
                        data: { status: 'CANCELLED' },
                    });

                    // Get remaining passengers
                    const remainingPassengers = ride.ridePassengers.filter(
                        (rp) => rp.bookingId !== id
                    );

                    if (remainingPassengers.length === 0) {
                        // No passengers left – cancel ride and free cab
                        await tx.ride.update({
                            where: { id: ride.id },
                            data: { status: 'CANCELLED', version: { increment: 1 } },
                        });
                        await tx.cab.update({
                            where: { id: ride.cabId },
                            data: { status: 'AVAILABLE' },
                        });
                    } else {
                        // Re-optimize route for remaining passengers
                        const dropoffs = remainingPassengers.map((rp) => ({
                            lat: rp.booking.dropoffLat,
                            lng: rp.booking.dropoffLng,
                            bookingId: rp.bookingId,
                        }));

                        const newRoute = optimizeRoute(dropoffs, AIRPORT);

                        // Recalculate prices
                        const [activeCount, cabCount] = await Promise.all([
                            tx.booking.count({ where: { status: { in: ['PENDING', 'POOLED'] } } }),
                            tx.cab.count({ where: { status: { in: ['AVAILABLE', 'BUSY'] } } }),
                        ]);

                        const passengerDistances = remainingPassengers.map((rp) => ({
                            bookingId: rp.bookingId,
                            distanceKm: haversineDistance(
                                AIRPORT.lat, AIRPORT.lng,
                                rp.booking.dropoffLat, rp.booking.dropoffLng
                            ),
                        }));

                        const prices = calculatePooledPrices(passengerDistances, activeCount, cabCount);

                        // Update ride
                        await tx.ride.update({
                            where: { id: ride.id },
                            data: {
                                routeJson: newRoute.routeJson,
                                totalDistance: newRoute.totalDistance,
                                totalPrice: prices.reduce((sum, p) => sum + p.price, 0),
                                version: { increment: 1 },
                            },
                        });

                        // Update remaining passengers' sequence and prices
                        for (const stop of newRoute.orderedStops) {
                            const price = prices.find((p) => p.bookingId === stop.bookingId);
                            await tx.ridePassenger.updateMany({
                                where: { rideId: ride.id, bookingId: stop.bookingId },
                                data: {
                                    sequenceOrder: stop.sequenceOrder,
                                    individualPrice: price?.price || 0,
                                },
                            });
                        }
                    }
                });
            } finally {
                await releaseLock(lockResource, lock.lockValue);
            }
        } else {
            // Booking was still pending (not yet pooled)
            await prisma.booking.update({
                where: { id },
                data: { status: 'CANCELLED' },
            });
        }

        return prisma.booking.findUnique({
            where: { id },
            include: { passenger: true },
        });
    }

    /**
     * List bookings with filters.
     */
    async list(page = 1, limit = 20, status = undefined) {
        const where = status ? { status } : {};
        const skip = (page - 1) * limit;
        const [bookings, total] = await Promise.all([
            prisma.booking.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: { passenger: true },
            }),
            prisma.booking.count({ where }),
        ]);
        return { bookings, total, page, limit };
    }
}

export default new BookingService();
