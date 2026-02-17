import { z } from 'zod';

export const createCabSchema = z.object({
    licensePlate: z.string().min(1, 'License plate is required'),
    driverName: z.string().min(1, 'Driver name is required'),
    totalSeats: z.number().int().min(1).max(10).default(4),
    luggageCapacity: z.number().int().min(1).max(10).default(4),
    locationLat: z.number().min(-90).max(90).default(0),
    locationLng: z.number().min(-180).max(180).default(0),
});

export const updateCabStatusSchema = z.object({
    status: z.enum(['AVAILABLE', 'BUSY', 'OFFLINE']),
});
