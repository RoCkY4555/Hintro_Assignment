import prisma from '../../config/database.js';

class PassengerService {
    /**
     * Create a new passenger.
     * @param {{ name: string, phone: string, email: string }} data
     */
    async create(data) {
        return prisma.passenger.create({ data });
    }

    /**
     * Get a passenger by ID.
     * @param {string} id
     */
    async getById(id) {
        return prisma.passenger.findUnique({
            where: { id },
            include: { bookings: { orderBy: { createdAt: 'desc' }, take: 10 } },
        });
    }

    /**
     * List all passengers (paginated).
     * @param {number} page
     * @param {number} limit
     */
    async list(page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [passengers, total] = await Promise.all([
            prisma.passenger.findMany({ skip, take: limit, orderBy: { createdAt: 'desc' } }),
            prisma.passenger.count(),
        ]);
        return { passengers, total, page, limit };
    }
}

export default new PassengerService();
