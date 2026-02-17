import { Router } from 'express';
import controller from './controller.js';

const router = Router();

/**
 * @swagger
 * /api/rides/pool:
 *   post:
 *     summary: Manually trigger the ride pooling engine
 *     tags: [Rides]
 *     responses:
 *       200:
 *         description: Pooling results
 */
router.post('/pool', controller.pool.bind(controller));

/**
 * @swagger
 * /api/pricing/estimate:
 *   get:
 *     summary: Get price estimate for a route
 *     tags: [Pricing]
 *     parameters:
 *       - name: pickupLat
 *         in: query
 *         required: true
 *         schema:
 *           type: number
 *           example: 28.5562
 *       - name: pickupLng
 *         in: query
 *         required: true
 *         schema:
 *           type: number
 *           example: 77.1000
 *       - name: dropoffLat
 *         in: query
 *         required: true
 *         schema:
 *           type: number
 *           example: 28.6139
 *       - name: dropoffLng
 *         in: query
 *         required: true
 *         schema:
 *           type: number
 *           example: 77.2090
 *     responses:
 *       200:
 *         description: Price estimates (solo and pooled)
 */
router.get('/estimate', controller.priceEstimate.bind(controller));

/**
 * @swagger
 * /api/rides:
 *   get:
 *     summary: List rides (paginated, filterable by status)
 *     tags: [Rides]
 *     parameters:
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *       - name: limit
 *         in: query
 *         schema:
 *           type: integer
 *       - name: status
 *         in: query
 *         schema:
 *           type: string
 *           enum: [FORMING, CONFIRMED, IN_TRANSIT, COMPLETED, CANCELLED]
 *     responses:
 *       200:
 *         description: List of rides
 */
router.get('/', controller.list.bind(controller));

/**
 * @swagger
 * /api/rides/{id}:
 *   get:
 *     summary: Get ride details with passengers
 *     tags: [Rides]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ride details
 *       404:
 *         description: Not found
 */
router.get('/:id', controller.getById.bind(controller));

/**
 * @swagger
 * /api/rides/{id}/confirm:
 *   patch:
 *     summary: Confirm a forming ride
 *     tags: [Rides]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ride confirmed
 */
router.patch('/:id/confirm', controller.confirm.bind(controller));

/**
 * @swagger
 * /api/rides/{id}/complete:
 *   patch:
 *     summary: Complete a ride
 *     tags: [Rides]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ride completed
 */
router.patch('/:id/complete', controller.complete.bind(controller));

export default router;
