import prisma from '../../config/database.js';

class CabService {
    async create(data) {
        return prisma.cab.create({ data });
    }

    async getById(id) {
        return prisma.cab.findUnique({
            where: { id },
            include: { rides: { orderBy: { createdAt: 'desc' }, take: 5 } },
        });
    }

    async updateStatus(id, status) {
        return prisma.cab.update({
            where: { id },
            data: { status },
        });
    }

    async listAvailable() {
        return prisma.cab.findMany({
            where: { status: 'AVAILABLE' },
            orderBy: { createdAt: 'desc' },
        });
    }

    async list(page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [cabs, total] = await Promise.all([
            prisma.cab.findMany({ skip, take: limit, orderBy: { createdAt: 'desc' } }),
            prisma.cab.count(),
        ]);
        return { cabs, total, page, limit };
    }
}

export default new CabService();
