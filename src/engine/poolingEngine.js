/**
 * Ride Pooling Engine – Modified First-Fit Decreasing Bin-Packing
 *
 * Groups pending bookings into shared rides (cabs) while respecting:
 *   1. Seat capacity constraints
 *   2. Luggage capacity constraints
 *   3. Per-passenger detour tolerance
 *
 * Algorithm:
 *   1. Fetch all PENDING bookings, sorted by pickup proximity to airport.
 *   2. Fetch all FORMING rides and AVAILABLE cabs.
 *   3. For each booking, attempt to insert into an existing FORMING ride:
 *      - Check seat and luggage capacity
 *      - Simulate new route and verify detour for ALL existing passengers
 *   4. If no existing ride fits, create a new ride with an available cab.
 *   5. Use distributed locks per ride to prevent race conditions.
 *
 * Time Complexity:  O(n × m × k²) where n=bookings, m=forming rides, k=max stops/ride
 * Space Complexity: O(n + m)
 */

import prisma from '../config/database.js';
import { optimizeRoute, calculateDeviation, AIRPORT } from './routeOptimizer.js';
import { calculatePooledPrices } from './pricingEngine.js';
import { haversineDistance } from '../utils/distanceUtils.js';
import { acquireLock, releaseLock } from '../utils/lock.js';
import logger from '../utils/logger.js';

/**
 * Run the pooling engine: assign all pending bookings to rides.
 *
 * @returns {{ pooledCount: number, newRidesCreated: number, errors: string[] }}
 */
export async function runPoolingEngine() {
    const result = { pooledCount: 0, newRidesCreated: 0, errors: [] };

    // 1. Fetch pending bookings, sorted by proximity to airport
    const pendingBookings = await prisma.booking.findMany({
        where: { status: 'PENDING' },
        orderBy: { createdAt: 'asc' },
    });

    if (pendingBookings.length === 0) {
        logger.info('Pooling engine: No pending bookings');
        return result;
    }

    // Sort by distance to airport (closest first for better grouping)
    pendingBookings.sort((a, b) => {
        const distA = haversineDistance(AIRPORT.lat, AIRPORT.lng, a.dropoffLat, a.dropoffLng);
        const distB = haversineDistance(AIRPORT.lat, AIRPORT.lng, b.dropoffLat, b.dropoffLng);
        return distA - distB;
    });

    // 2. Fetch current forming rides with their passengers
    const formingRides = await prisma.ride.findMany({
        where: { status: 'FORMING' },
        include: {
            cab: true,
            ridePassengers: {
                include: { booking: true },
            },
        },
    });

    // 3. Fetch available cabs
    const availableCabs = await prisma.cab.findMany({
        where: { status: 'AVAILABLE' },
    });

    // Count for pricing
    const activeBookingCount = pendingBookings.length;
    const availableCabCount = availableCabs.length + formingRides.length;

    // 4. For each pending booking, try to fit into existing ride or create new
    for (const booking of pendingBookings) {
        let assigned = false;

        // Try to fit into an existing forming ride
        for (const ride of formingRides) {
            const lockResource = `ride:${ride.id}`;
            const lock = await acquireLock(lockResource);

            if (!lock.acquired) {
                continue; // Skip this ride if locked
            }

            try {
                // Check seat capacity
                const currentPassengerCount = ride.ridePassengers.length;
                if (currentPassengerCount + 1 > ride.cab.totalSeats) {
                    continue;
                }

                // Check luggage capacity
                const currentLuggage = ride.ridePassengers.reduce(
                    (sum, rp) => sum + rp.booking.luggageCount,
                    0
                );
                if (currentLuggage + booking.luggageCount > ride.cab.luggageCapacity) {
                    continue;
                }

                // Simulate adding this booking to the route
                const allDropoffs = [
                    ...ride.ridePassengers.map((rp) => ({
                        lat: rp.booking.dropoffLat,
                        lng: rp.booking.dropoffLng,
                        bookingId: rp.bookingId,
                    })),
                    {
                        lat: booking.dropoffLat,
                        lng: booking.dropoffLng,
                        bookingId: booking.id,
                    },
                ];

                const newRoute = optimizeRoute(allDropoffs, AIRPORT);

                // Check detour tolerance for ALL passengers (including existing ones)
                let detourOk = true;
                for (const rp of ride.ridePassengers) {
                    const stopsBefore = [];
                    for (const stop of newRoute.orderedStops) {
                        if (stop.bookingId === rp.bookingId) break;
                        stopsBefore.push(stop);
                    }
                    const deviation = calculateDeviation(
                        AIRPORT,
                        { lat: rp.booking.dropoffLat, lng: rp.booking.dropoffLng },
                        stopsBefore
                    );
                    if (deviation > rp.booking.detourToleranceKm) {
                        detourOk = false;
                        break;
                    }
                }

                // Check detour for the new booking too
                if (detourOk) {
                    const newStopsBefore = [];
                    for (const stop of newRoute.orderedStops) {
                        if (stop.bookingId === booking.id) break;
                        newStopsBefore.push(stop);
                    }
                    const newDeviation = calculateDeviation(
                        AIRPORT,
                        { lat: booking.dropoffLat, lng: booking.dropoffLng },
                        newStopsBefore
                    );
                    if (newDeviation > booking.detourToleranceKm) {
                        detourOk = false;
                    }
                }

                if (!detourOk) continue;

                // All checks passed – assign booking to this ride (with optimistic locking)
                const allPassengerDistances = [
                    ...ride.ridePassengers.map((rp) => ({
                        bookingId: rp.bookingId,
                        distanceKm: haversineDistance(
                            AIRPORT.lat, AIRPORT.lng,
                            rp.booking.dropoffLat, rp.booking.dropoffLng
                        ),
                    })),
                    {
                        bookingId: booking.id,
                        distanceKm: haversineDistance(
                            AIRPORT.lat, AIRPORT.lng,
                            booking.dropoffLat, booking.dropoffLng
                        ),
                    },
                ];

                const prices = calculatePooledPrices(
                    allPassengerDistances,
                    activeBookingCount,
                    availableCabCount
                );

                await prisma.$transaction(async (tx) => {
                    // Optimistic locking: only update if version matches
                    const updated = await tx.ride.updateMany({
                        where: { id: ride.id, version: ride.version },
                        data: {
                            routeJson: newRoute.routeJson,
                            totalDistance: newRoute.totalDistance,
                            totalPrice: prices.reduce((sum, p) => sum + p.price, 0),
                            version: { increment: 1 },
                        },
                    });

                    if (updated.count === 0) {
                        throw new Error('Optimistic lock conflict');
                    }

                    // Add booking to ride
                    await tx.ridePassenger.create({
                        data: {
                            rideId: ride.id,
                            bookingId: booking.id,
                            sequenceOrder: newRoute.orderedStops.find(
                                (s) => s.bookingId === booking.id
                            )?.sequenceOrder || 0,
                            individualPrice: prices.find((p) => p.bookingId === booking.id)?.price || 0,
                        },
                    });

                    // Update existing passenger prices and sequence orders
                    for (const stop of newRoute.orderedStops) {
                        if (stop.bookingId !== booking.id) {
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

                    // Mark booking as pooled
                    await tx.booking.update({
                        where: { id: booking.id },
                        data: { status: 'POOLED' },
                    });
                });

                // Update in-memory state for subsequent iterations
                ride.ridePassengers.push({ bookingId: booking.id, booking });
                ride.version += 1;

                assigned = true;
                result.pooledCount++;
                logger.info(`Booking ${booking.id} pooled into ride ${ride.id}`);
                break; // Move to next booking
            } catch (err) {
                if (err.message !== 'Optimistic lock conflict') {
                    result.errors.push(`Error pooling booking ${booking.id}: ${err.message}`);
                    logger.error(`Pooling error: ${err.message}`);
                }
            } finally {
                await releaseLock(lockResource, lock.lockValue);
            }
        }

        // 5. No existing ride fits – create a new ride
        if (!assigned) {
            if (availableCabs.length === 0) {
                result.errors.push(`No available cabs for booking ${booking.id}`);
                logger.warn(`No available cabs for booking ${booking.id}`);
                continue;
            }

            const cab = availableCabs.shift(); // Take first available cab
            const dropoff = {
                lat: booking.dropoffLat,
                lng: booking.dropoffLng,
                bookingId: booking.id,
            };
            const route = optimizeRoute([dropoff], AIRPORT);
            const distanceKm = haversineDistance(
                AIRPORT.lat, AIRPORT.lng,
                booking.dropoffLat, booking.dropoffLng
            );
            const priceResult = calculatePooledPrices(
                [{ bookingId: booking.id, distanceKm }],
                activeBookingCount,
                availableCabCount
            );

            try {
                const newRide = await prisma.$transaction(async (tx) => {
                    // Mark cab as busy
                    await tx.cab.update({
                        where: { id: cab.id },
                        data: { status: 'BUSY' },
                    });

                    // Create ride
                    const ride = await tx.ride.create({
                        data: {
                            cabId: cab.id,
                            status: 'FORMING',
                            routeJson: route.routeJson,
                            totalDistance: route.totalDistance,
                            totalPrice: priceResult[0].price,
                            version: 1,
                        },
                    });

                    // Assign passenger
                    await tx.ridePassenger.create({
                        data: {
                            rideId: ride.id,
                            bookingId: booking.id,
                            sequenceOrder: 1,
                            individualPrice: priceResult[0].price,
                        },
                    });

                    // Update booking status
                    await tx.booking.update({
                        where: { id: booking.id },
                        data: { status: 'POOLED' },
                    });

                    return ride;
                });

                // Add to forming rides for subsequent bookings
                formingRides.push({
                    ...newRide,
                    cab,
                    ridePassengers: [{ bookingId: booking.id, booking }],
                });

                result.pooledCount++;
                result.newRidesCreated++;
                logger.info(`New ride ${newRide.id} created for booking ${booking.id} with cab ${cab.id}`);
            } catch (err) {
                availableCabs.unshift(cab); // Return cab if creation failed
                result.errors.push(`Error creating ride for booking ${booking.id}: ${err.message}`);
                logger.error(`Ride creation error: ${err.message}`);
            }
        }
    }

    logger.info(
        `Pooling complete: ${result.pooledCount} bookings pooled, ${result.newRidesCreated} new rides`
    );
    return result;
}
