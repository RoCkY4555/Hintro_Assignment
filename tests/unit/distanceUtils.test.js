/**
 * Unit tests for Distance Utilities (Haversine formula)
 */

import { haversineDistance, totalRouteDistance, toRadians } from '../../src/utils/distanceUtils.js';

describe('Distance Utilities', () => {
    describe('haversineDistance', () => {
        test('should return 0 for same point', () => {
            const d = haversineDistance(28.5562, 77.1000, 28.5562, 77.1000);
            expect(d).toBeCloseTo(0, 5);
        });

        test('should calculate distance between Delhi Airport and Connaught Place (~13km)', () => {
            const d = haversineDistance(28.5562, 77.1000, 28.6139, 77.2090);
            expect(d).toBeGreaterThan(10);
            expect(d).toBeLessThan(20);
        });

        test('should be symmetric', () => {
            const d1 = haversineDistance(28.5562, 77.1000, 28.6139, 77.2090);
            const d2 = haversineDistance(28.6139, 77.2090, 28.5562, 77.1000);
            expect(d1).toBeCloseTo(d2, 10);
        });
    });

    describe('totalRouteDistance', () => {
        test('should return 0 for empty or single stop', () => {
            expect(totalRouteDistance([])).toBe(0);
            expect(totalRouteDistance([{ lat: 28.5562, lng: 77.1000 }])).toBe(0);
        });

        test('should sum distances between consecutive stops', () => {
            const stops = [
                { lat: 28.5562, lng: 77.1000 },
                { lat: 28.6139, lng: 77.2090 },
                { lat: 28.6280, lng: 77.1900 },
            ];
            const total = totalRouteDistance(stops);
            const d1 = haversineDistance(stops[0].lat, stops[0].lng, stops[1].lat, stops[1].lng);
            const d2 = haversineDistance(stops[1].lat, stops[1].lng, stops[2].lat, stops[2].lng);
            expect(total).toBeCloseTo(d1 + d2, 5);
        });
    });
});
