import { z } from 'zod';

export const createBookingSchema = z.object({
    passengerId: z.string().uuid('Invalid passenger ID'),
    pickupLat: z.number().min(-90).max(90),
    pickupLng: z.number().min(-180).max(180),
    dropoffLat: z.number().min(-90).max(90),
    dropoffLng: z.number().min(-180).max(180),
    luggageCount: z.number().int().min(0).max(10).default(1),
    detourToleranceKm: z.number().min(0).max(20).default(5.0),
});
