import { z } from 'zod';

export const createPassengerSchema = z.object({
    name: z.string().min(1, 'Name is required').max(100),
    phone: z.string().min(10, 'Phone must be at least 10 characters').max(15),
    email: z.string().email('Invalid email'),
});
