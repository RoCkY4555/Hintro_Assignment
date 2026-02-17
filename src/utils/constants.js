/**
 * Application-wide constants for the Airport Ride Pooling system.
 */

export const PRICING = {
    BASE_FARE: 50,           // ₹50 base fare
    PER_KM_RATE: 15,         // ₹15 per km
    SURGE_THRESHOLD: 1.5,    // surge kicks in when ratio > 1.5
    DEMAND_MULTIPLIER_RATE: 0.2,
    POOL_DISCOUNT_RATE: 0.15, // 15% discount per additional passenger
    MIN_FARE: 50,
};

export const RIDE = {
    MAX_DETOUR_TOLERANCE_KM: 10, // maximum allowed detour
    DEFAULT_DETOUR_TOLERANCE_KM: 5,
    POOLING_INTERVAL_MS: 5000,   // run pooling engine every 5 seconds (if using interval)
};

export const LOCK = {
    TTL_MS: 10000,   // lock timeout 10 seconds
    RETRY_DELAY: 200,
    MAX_RETRIES: 5,
};
