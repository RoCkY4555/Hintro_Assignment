/**
 * Dynamic Pricing Engine
 *
 * Formula:
 *   price = baseFare + (distance_km × perKmRate) + (surgeFactor × demandMultiplier) - poolDiscount
 *
 * Where:
 *   surgeFactor      = max(1, activeBookings / availableCabs)
 *   demandMultiplier = 1 + 0.2 × max(0, surgeFactor - 1.5)
 *   poolDiscount     = baseFare × 0.15 × (passengersInRide - 1)
 *
 * Time Complexity:  O(1) per price calculation
 * Space Complexity: O(1)
 */

import { PRICING } from '../utils/constants.js';

/**
 * Calculate the dynamic price for a ride.
 *
 * @param {object} params
 * @param {number} params.distanceKm - Distance in kilometres
 * @param {number} params.activeBookings - Current number of active/pending bookings
 * @param {number} params.availableCabs - Current number of available cabs
 * @param {number} params.passengersInRide - Number of passengers pooled in this ride
 * @returns {{ totalPrice: number, breakdown: object }}
 */
export function calculatePrice({
    distanceKm,
    activeBookings = 1,
    availableCabs = 1,
    passengersInRide = 1,
}) {
    const {
        BASE_FARE,
        PER_KM_RATE,
        SURGE_THRESHOLD,
        DEMAND_MULTIPLIER_RATE,
        POOL_DISCOUNT_RATE,
        MIN_FARE,
    } = PRICING;

    // Surge factor: ratio of demand to supply, minimum 1
    const surgeFactor = Math.max(1, availableCabs > 0 ? activeBookings / availableCabs : 1);

    // Demand multiplier: kicks in above threshold
    const demandMultiplier = 1 + DEMAND_MULTIPLIER_RATE * Math.max(0, surgeFactor - SURGE_THRESHOLD);

    // Base distance cost
    const distanceCost = distanceKm * PER_KM_RATE;

    // Surge cost
    const surgeCost = (surgeFactor - 1) * demandMultiplier * BASE_FARE * 0.1;

    // Pool discount
    const poolDiscount = BASE_FARE * POOL_DISCOUNT_RATE * Math.max(0, passengersInRide - 1);

    // Total price
    let totalPrice = BASE_FARE + distanceCost + surgeCost - poolDiscount;
    totalPrice = Math.max(totalPrice, MIN_FARE);
    totalPrice = Math.round(totalPrice * 100) / 100;

    return {
        totalPrice,
        breakdown: {
            baseFare: BASE_FARE,
            distanceCost: Math.round(distanceCost * 100) / 100,
            surgeFactor: Math.round(surgeFactor * 100) / 100,
            demandMultiplier: Math.round(demandMultiplier * 100) / 100,
            surgeCost: Math.round(surgeCost * 100) / 100,
            poolDiscount: Math.round(poolDiscount * 100) / 100,
            passengersInRide,
        },
    };
}

/**
 * Calculate individual fare for each passenger in a pooled ride.
 *
 * @param {{ distanceKm: number, bookingId: string }[]} passengers
 * @param {number} activeBookings
 * @param {number} availableCabs
 * @returns {{ bookingId: string, price: number, breakdown: object }[]}
 */
export function calculatePooledPrices(passengers, activeBookings, availableCabs) {
    return passengers.map((p) => {
        const result = calculatePrice({
            distanceKm: p.distanceKm,
            activeBookings,
            availableCabs,
            passengersInRide: passengers.length,
        });

        return {
            bookingId: p.bookingId,
            price: result.totalPrice,
            breakdown: result.breakdown,
        };
    });
}
