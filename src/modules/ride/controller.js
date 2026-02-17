import rideService from './service.js';

class RideController {
    async pool(req, res, next) {
        try {
            const result = await rideService.triggerPooling();
            res.json({ success: true, data: result });
        } catch (err) {
            next(err);
        }
    }

    async getById(req, res, next) {
        try {
            const ride = await rideService.getById(req.params.id);
            if (!ride) {
                return res.status(404).json({ success: false, error: 'Ride not found' });
            }
            res.json({ success: true, data: ride });
        } catch (err) {
            next(err);
        }
    }

    async confirm(req, res, next) {
        try {
            const ride = await rideService.confirmRide(req.params.id);
            res.json({ success: true, data: ride });
        } catch (err) {
            next(err);
        }
    }

    async complete(req, res, next) {
        try {
            const ride = await rideService.completeRide(req.params.id);
            res.json({ success: true, data: ride });
        } catch (err) {
            next(err);
        }
    }

    async list(req, res, next) {
        try {
            const page = parseInt(req.query.page, 10) || 1;
            const limit = parseInt(req.query.limit, 10) || 20;
            const status = req.query.status || undefined;
            const result = await rideService.list(page, limit, status);
            res.json({ success: true, data: result });
        } catch (err) {
            next(err);
        }
    }

    async priceEstimate(req, res, next) {
        try {
            const { pickupLat, pickupLng, dropoffLat, dropoffLng } = req.query;
            if (!pickupLat || !pickupLng || !dropoffLat || !dropoffLng) {
                return res.status(400).json({
                    success: false,
                    error: 'pickupLat, pickupLng, dropoffLat, dropoffLng are required query params',
                });
            }
            const result = await rideService.getPriceEstimate(
                parseFloat(pickupLat),
                parseFloat(pickupLng),
                parseFloat(dropoffLat),
                parseFloat(dropoffLng)
            );
            res.json({ success: true, data: result });
        } catch (err) {
            next(err);
        }
    }
}

export default new RideController();
