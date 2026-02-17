/**
 * Unit tests for Dynamic Pricing Engine
 */

import { calculatePrice, calculatePooledPrices } from '../../src/engine/pricingEngine.js';

describe('Pricing Engine', () => {
    describe('calculatePrice', () => {
        test('should calculate base fare for a simple trip', () => {
            const result = calculatePrice({
                distanceKm: 10,
                activeBookings: 1,
                availableCabs: 5,
                passengersInRide: 1,
            });
            expect(result.totalPrice).toBeGreaterThan(0);
            expect(result.breakdown.baseFare).toBe(50);
            expect(result.breakdown.distanceCost).toBe(150); // 10 * 15
        });

        test('should never return below minimum fare', () => {
            const result = calculatePrice({
                distanceKm: 0,
                activeBookings: 1,
                availableCabs: 10,
                passengersInRide: 1,
            });
            expect(result.totalPrice).toBeGreaterThanOrEqual(50);
        });

        test('should apply surge pricing when demand exceeds supply', () => {
            const normal = calculatePrice({
                distanceKm: 10,
                activeBookings: 1,
                availableCabs: 5,
                passengersInRide: 1,
            });
            const surge = calculatePrice({
                distanceKm: 10,
                activeBookings: 20,
                availableCabs: 2,
                passengersInRide: 1,
            });
            expect(surge.totalPrice).toBeGreaterThan(normal.totalPrice);
            expect(surge.breakdown.surgeFactor).toBeGreaterThan(1);
        });

        test('should apply pool discount for multiple passengers', () => {
            const solo = calculatePrice({
                distanceKm: 10,
                activeBookings: 5,
                availableCabs: 5,
                passengersInRide: 1,
            });
            const pooled = calculatePrice({
                distanceKm: 10,
                activeBookings: 5,
                availableCabs: 5,
                passengersInRide: 3,
            });
            expect(pooled.totalPrice).toBeLessThan(solo.totalPrice);
            expect(pooled.breakdown.poolDiscount).toBeGreaterThan(0);
        });

        test('should include breakdown with all components', () => {
            const result = calculatePrice({
                distanceKm: 10,
                activeBookings: 5,
                availableCabs: 3,
                passengersInRide: 2,
            });
            expect(result.breakdown).toHaveProperty('baseFare');
            expect(result.breakdown).toHaveProperty('distanceCost');
            expect(result.breakdown).toHaveProperty('surgeFactor');
            expect(result.breakdown).toHaveProperty('demandMultiplier');
            expect(result.breakdown).toHaveProperty('surgeCost');
            expect(result.breakdown).toHaveProperty('poolDiscount');
            expect(result.breakdown).toHaveProperty('passengersInRide');
        });
    });

    describe('calculatePooledPrices', () => {
        test('should calculate individual prices for each passenger', () => {
            const passengers = [
                { bookingId: 'b1', distanceKm: 10 },
                { bookingId: 'b2', distanceKm: 15 },
            ];
            const prices = calculatePooledPrices(passengers, 5, 5);
            expect(prices).toHaveLength(2);
            expect(prices[0].bookingId).toBe('b1');
            expect(prices[1].bookingId).toBe('b2');
            // Farther passenger should pay more
            expect(prices[1].price).toBeGreaterThan(prices[0].price);
        });
    });
});
