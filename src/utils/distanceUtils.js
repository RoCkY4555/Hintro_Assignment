/**
 * Distance Utility Functions
 *
 * Uses the Haversine formula to calculate great-circle distances
 * between two points on Earth given their latitude/longitude.
 */

export const EARTH_RADIUS_KM = 6371;

/**
 * Convert degrees to radians.
 * @param {number} deg
 * @returns {number}
 */
export function toRadians(deg) {
    return (deg * Math.PI) / 180;
}

/**
 * Calculate distance between two coordinates using Haversine formula.
 * Time complexity: O(1)
 *
 * @param {number} lat1 - Latitude of point 1
 * @param {number} lng1 - Longitude of point 1
 * @param {number} lat2 - Latitude of point 2
 * @param {number} lng2 - Longitude of point 2
 * @returns {number} Distance in kilometres
 */
export function haversineDistance(lat1, lng1, lat2, lng2) {
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLng / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS_KM * c;
}

/**
 * Calculate the total route distance through an ordered list of stops.
 * Time complexity: O(k) where k = number of stops
 *
 * @param {{ lat: number, lng: number }[]} stops - Ordered list of stops
 * @returns {number} Total distance in km
 */
export function totalRouteDistance(stops) {
    let total = 0;
    for (let i = 0; i < stops.length - 1; i++) {
        total += haversineDistance(
            stops[i].lat,
            stops[i].lng,
            stops[i + 1].lat,
            stops[i + 1].lng
        );
    }
    return total;
}
