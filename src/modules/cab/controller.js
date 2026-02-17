import cabService from './service.js';
import { createCabSchema, updateCabStatusSchema } from './validation.js';

class CabController {
    async create(req, res, next) {
        try {
            const data = createCabSchema.parse(req.body);
            const cab = await cabService.create(data);
            res.status(201).json({ success: true, data: cab });
        } catch (err) {
            next(err);
        }
    }

    async getById(req, res, next) {
        try {
            const cab = await cabService.getById(req.params.id);
            if (!cab) {
                return res.status(404).json({ success: false, error: 'Cab not found' });
            }
            res.json({ success: true, data: cab });
        } catch (err) {
            next(err);
        }
    }

    async updateStatus(req, res, next) {
        try {
            const { status } = updateCabStatusSchema.parse(req.body);
            const cab = await cabService.updateStatus(req.params.id, status);
            res.json({ success: true, data: cab });
        } catch (err) {
            next(err);
        }
    }

    async listAvailable(req, res, next) {
        try {
            const cabs = await cabService.listAvailable();
            res.json({ success: true, data: cabs });
        } catch (err) {
            next(err);
        }
    }

    async list(req, res, next) {
        try {
            const page = parseInt(req.query.page, 10) || 1;
            const limit = parseInt(req.query.limit, 10) || 20;
            const result = await cabService.list(page, limit);
            res.json({ success: true, data: result });
        } catch (err) {
            next(err);
        }
    }
}

export default new CabController();
