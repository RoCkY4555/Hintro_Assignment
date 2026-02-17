/**
 * Route Optimizer – Nearest-Neighbor TSP Heuristic
 *
 * Algorithm: Starting from the airport (pickup point), greedily visit the
 * nearest unvisited dropoff until all stops are covered.
 *
 * Time Complexity:  O(k²) per ride, where k = number of stops
 * Space Complexity: O(k)
 */

import { haversineDistance, totalRouteDistance } from '../utils/distanceUtils.js';

// Default airport coordinates (Delhi Airport)
export const AIRPORT = { lat: 28.5562, lng: 77.1000 };

/**
 * Optimize the stop order for a set of dropoff locations using nearest-neighbor.
 *
 * @param {{ lat: number, lng: number, bookingId: string }[]} dropoffs
 * @param {{ lat: number, lng: number }} origin - Starting point (airport)
 * @returns {{ orderedStops: Array, totalDistance: number, routeJson: object }}
 */
export function optimizeRoute(dropoffs, origin = AIRPORT) {
    if (!dropoffs || dropoffs.length === 0) {
        return { orderedStops: [], totalDistance: 0, routeJson: { origin, stops: [] } };
    }

    if (dropoffs.length === 1) {
        const dist = haversineDistance(origin.lat, origin.lng, dropoffs[0].lat, dropoffs[0].lng);
        return {
            orderedStops: [{ ...dropoffs[0], sequenceOrder: 1 }],
            totalDistance: dist,
            routeJson: { origin, stops: dropoffs },
        };
    }

    // Nearest-neighbor heuristic
    const visited = new Set();
    const orderedStops = [];
    let currentPoint = origin;
    const remaining = [...dropoffs];

    while (visited.size < dropoffs.length) {
        let nearestIdx = -1;
        let nearestDist = Infinity;

        for (let i = 0; i < remaining.length; i++) {
            if (visited.has(i)) continue;
            const dist = haversineDistance(
                currentPoint.lat,
                currentPoint.lng,
                remaining[i].lat,
                remaining[i].lng
            );
            if (dist < nearestDist) {
                nearestDist = dist;
                nearestIdx = i;
            }
        }

        visited.add(nearestIdx);
        orderedStops.push({
            ...remaining[nearestIdx],
            sequenceOrder: orderedStops.length + 1,
        });
        currentPoint = remaining[nearestIdx];
    }

    // Calculate total route distance
    const allPoints = [origin, ...orderedStops];
    const totalDist = totalRouteDistance(allPoints);

    return {
        orderedStops,
        totalDistance: Math.round(totalDist * 100) / 100,
        routeJson: { origin, stops: orderedStops },
    };
}

/**
 * Calculate deviation for a specific passenger if added to a pooled route.
 *
 * Deviation = (pooled route distance to their stop) - (direct distance from origin)
 *
 * @param {{ lat: number, lng: number }} origin
 * @param {{ lat: number, lng: number }} passengerDropoff
 * @param {{ lat: number, lng: number }[]} orderedStopsBefore - Stops before this passenger's dropoff
 * @returns {number} Deviation in km
 */
export function calculateDeviation(origin, passengerDropoff, orderedStopsBefore) {
    const directDistance = haversineDistance(
        origin.lat,
        origin.lng,
        passengerDropoff.lat,
        passengerDropoff.lng
    );

    const pooledStops = [origin, ...orderedStopsBefore, passengerDropoff];
    const pooledDistance = totalRouteDistance(pooledStops);

    return Math.max(0, pooledDistance - directDistance);
}
