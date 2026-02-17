/**
 * Unit tests for Route Optimizer (Nearest-Neighbor TSP Heuristic)
 */

import { optimizeRoute, calculateDeviation, AIRPORT } from '../../src/engine/routeOptimizer.js';
import { haversineDistance } from '../../src/utils/distanceUtils.js';

describe('Route Optimizer', () => {
    describe('optimizeRoute', () => {
        test('should handle empty dropoffs', () => {
            const result = optimizeRoute([]);
            expect(result.orderedStops).toHaveLength(0);
            expect(result.totalDistance).toBe(0);
        });

        test('should handle single dropoff', () => {
            const dropoffs = [
                { lat: 28.6139, lng: 77.2090, bookingId: 'b1' },
            ];
            const result = optimizeRoute(dropoffs);
            expect(result.orderedStops).toHaveLength(1);
            expect(result.orderedStops[0].sequenceOrder).toBe(1);
            expect(result.totalDistance).toBeGreaterThan(0);
        });

        test('should order multiple dropoffs by nearest-neighbor', () => {
            const dropoffs = [
                { lat: 28.7000, lng: 77.3000, bookingId: 'far' },     // farther from airport
                { lat: 28.5800, lng: 77.1200, bookingId: 'near' },    // near to airport
                { lat: 28.6500, lng: 77.2000, bookingId: 'medium' },  // medium distance
            ];
            const result = optimizeRoute(dropoffs);
            expect(result.orderedStops).toHaveLength(3);
            // Nearest neighbor from airport should be 'near' first
            expect(result.orderedStops[0].bookingId).toBe('near');
            expect(result.totalDistance).toBeGreaterThan(0);
        });

        test('should include route JSON with origin and stops', () => {
            const dropoffs = [{ lat: 28.6139, lng: 77.2090, bookingId: 'b1' }];
            const result = optimizeRoute(dropoffs);
            expect(result.routeJson).toHaveProperty('origin');
            expect(result.routeJson).toHaveProperty('stops');
            expect(result.routeJson.origin).toEqual(AIRPORT);
        });

        test('should assign sequential orders starting from 1', () => {
            const dropoffs = [
                { lat: 28.6139, lng: 77.2090, bookingId: 'b1' },
                { lat: 28.6280, lng: 77.1900, bookingId: 'b2' },
                { lat: 28.5355, lng: 77.3910, bookingId: 'b3' },
            ];
            const result = optimizeRoute(dropoffs);
            const orders = result.orderedStops.map((s) => s.sequenceOrder);
            expect(orders).toEqual([1, 2, 3]);
        });
    });

    describe('calculateDeviation', () => {
        test('should return 0 deviation for direct route', () => {
            const origin = AIRPORT;
            const destination = { lat: 28.6139, lng: 77.2090 };
            const deviation = calculateDeviation(origin, destination, []);
            expect(deviation).toBeCloseTo(0, 1);
        });

        test('should return positive deviation for indirect route', () => {
            const origin = AIRPORT;
            const destination = { lat: 28.6139, lng: 77.2090 };
            const intermediateStops = [
                { lat: 28.7000, lng: 77.0000 },  // a stop in another direction
            ];
            const deviation = calculateDeviation(origin, destination, intermediateStops);
            expect(deviation).toBeGreaterThan(0);
        });
    });
});
