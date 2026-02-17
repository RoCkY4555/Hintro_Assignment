import prisma from '../../config/database.js';
import { runPoolingEngine } from '../../engine/poolingEngine.js';
import { calculatePrice } from '../../engine/pricingEngine.js';
import { haversineDistance } from '../../utils/distanceUtils.js';
import { AIRPORT } from '../../engine/routeOptimizer.js';
import logger from '../../utils/logger.js';

class RideService {
    /**
     * Get ride by ID with full details.
     */
    async getById(id) {
        return prisma.ride.findUnique({
            where: { id },
            include: {
                cab: true,
                ridePassengers: {
                    include: {
                        booking: { include: { passenger: true } },
                    },
                    orderBy: { sequenceOrder: 'asc' },
                },
            },
        });
    }

    /**
     * Manually trigger the pooling engine.
     */
    async triggerPooling() {
        logger.info('Manual pooling triggered');
        return runPoolingEngine();
    }

    /**
     * Confirm a forming ride (move to CONFIRMED).
     */
    async confirmRide(id) {
        const ride = await prisma.ride.findUnique({ where: { id } });
        if (!ride) throw Object.assign(new Error('Ride not found'), { statusCode: 404 });
        if (ride.status !== 'FORMING') {
            throw Object.assign(new Error('Only FORMING rides can be confirmed'), { statusCode: 400 });
        }

        return prisma.$transaction(async (tx) => {
            const updated = await tx.ride.updateMany({
                where: { id, version: ride.version },
                data: { status: 'CONFIRMED', version: { increment: 1 } },
            });
            if (updated.count === 0) throw new Error('Concurrent modification – retry');

            // Update all related bookings to IN_TRANSIT
            const ridePassengers = await tx.ridePassenger.findMany({ where: { rideId: id } });
            for (const rp of ridePassengers) {
                await tx.booking.update({
                    where: { id: rp.bookingId },
                    data: { status: 'IN_TRANSIT' },
                });
            }

            return tx.ride.findUnique({
                where: { id },
                include: {
                    cab: true,
                    ridePassengers: {
                        include: { booking: { include: { passenger: true } } },
                        orderBy: { sequenceOrder: 'asc' },
                    },
                },
            });
        });
    }

    /**
     * Complete a ride.
     */
    async completeRide(id) {
        const ride = await prisma.ride.findUnique({ where: { id } });
        if (!ride) throw Object.assign(new Error('Ride not found'), { statusCode: 404 });
        if (ride.status !== 'CONFIRMED' && ride.status !== 'IN_TRANSIT') {
            throw Object.assign(
                new Error('Only CONFIRMED or IN_TRANSIT rides can be completed'),
                { statusCode: 400 }
            );
        }

        return prisma.$transaction(async (tx) => {
            await tx.ride.update({
                where: { id },
                data: { status: 'COMPLETED', version: { increment: 1 } },
            });

            // Complete all bookings
            const ridePassengers = await tx.ridePassenger.findMany({ where: { rideId: id } });
            for (const rp of ridePassengers) {
                await tx.booking.update({
                    where: { id: rp.bookingId },
                    data: { status: 'COMPLETED' },
                });
            }

            // Free cab
            await tx.cab.update({
                where: { id: ride.cabId },
                data: { status: 'AVAILABLE' },
            });

            return tx.ride.findUnique({
                where: { id },
                include: {
                    cab: true,
                    ridePassengers: {
                        include: { booking: { include: { passenger: true } } },
                        orderBy: { sequenceOrder: 'asc' },
                    },
                },
            });
        });
    }

    /**
     * List rides with filters.
     */
    async list(page = 1, limit = 20, status = undefined) {
        const where = status ? { status } : {};
        const skip = (page - 1) * limit;
        const [rides, total] = await Promise.all([
            prisma.ride.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    cab: true,
                    ridePassengers: {
                        include: { booking: { include: { passenger: true } } },
                        orderBy: { sequenceOrder: 'asc' },
                    },
                },
            }),
            prisma.ride.count({ where }),
        ]);
        return { rides, total, page, limit };
    }

    /**
     * Get price estimate for a given route.
     */
    async getPriceEstimate(pickupLat, pickupLng, dropoffLat, dropoffLng) {
        const distanceKm = haversineDistance(pickupLat, pickupLng, dropoffLat, dropoffLng);

        const [activeBookings, availableCabs] = await Promise.all([
            prisma.booking.count({ where: { status: { in: ['PENDING', 'POOLED'] } } }),
            prisma.cab.count({ where: { status: 'AVAILABLE' } }),
        ]);

        const solo = calculatePrice({
            distanceKm,
            activeBookings: Math.max(1, activeBookings),
            availableCabs: Math.max(1, availableCabs),
            passengersInRide: 1,
        });

        const pooled2 = calculatePrice({
            distanceKm,
            activeBookings: Math.max(1, activeBookings),
            availableCabs: Math.max(1, availableCabs),
            passengersInRide: 2,
        });

        const pooled3 = calculatePrice({
            distanceKm,
            activeBookings: Math.max(1, activeBookings),
            availableCabs: Math.max(1, availableCabs),
            passengersInRide: 3,
        });

        return {
            distanceKm: Math.round(distanceKm * 100) / 100,
            estimates: {
                solo: solo,
                pooledWith2: pooled2,
                pooledWith3: pooled3,
            },
        };
    }
}

export default new RideService();
