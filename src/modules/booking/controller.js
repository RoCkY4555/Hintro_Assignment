import bookingService from './service.js';
import { createBookingSchema } from './validation.js';

class BookingController {
    async create(req, res, next) {
        try {
            const data = createBookingSchema.parse(req.body);
            const booking = await bookingService.create(data);
            res.status(201).json({ success: true, data: booking });
        } catch (err) {
            next(err);
        }
    }

    async getById(req, res, next) {
        try {
            const booking = await bookingService.getById(req.params.id);
            if (!booking) {
                return res.status(404).json({ success: false, error: 'Booking not found' });
            }
            res.json({ success: true, data: booking });
        } catch (err) {
            next(err);
        }
    }

    async cancel(req, res, next) {
        try {
            const booking = await bookingService.cancel(req.params.id);
            res.json({ success: true, data: booking, message: 'Booking cancelled successfully' });
        } catch (err) {
            next(err);
        }
    }

    async list(req, res, next) {
        try {
            const page = parseInt(req.query.page, 10) || 1;
            const limit = parseInt(req.query.limit, 10) || 20;
            const status = req.query.status || undefined;
            const result = await bookingService.list(page, limit, status);
            res.json({ success: true, data: result });
        } catch (err) {
            next(err);
        }
    }
}

export default new BookingController();
