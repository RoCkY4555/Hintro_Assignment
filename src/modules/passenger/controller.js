import passengerService from './service.js';
import { createPassengerSchema } from './validation.js';

class PassengerController {
    /**
     * POST /api/passengers
     */
    async create(req, res, next) {
        try {
            const data = createPassengerSchema.parse(req.body);
            const passenger = await passengerService.create(data);
            res.status(201).json({ success: true, data: passenger });
        } catch (err) {
            next(err);
        }
    }

    /**
     * GET /api/passengers/:id
     */
    async getById(req, res, next) {
        try {
            const passenger = await passengerService.getById(req.params.id);
            if (!passenger) {
                return res.status(404).json({ success: false, error: 'Passenger not found' });
            }
            res.json({ success: true, data: passenger });
        } catch (err) {
            next(err);
        }
    }

    /**
     * GET /api/passengers
     */
    async list(req, res, next) {
        try {
            const page = parseInt(req.query.page, 10) || 1;
            const limit = parseInt(req.query.limit, 10) || 20;
            const result = await passengerService.list(page, limit);
            res.json({ success: true, data: result });
        } catch (err) {
            next(err);
        }
    }
}

export default new PassengerController();
