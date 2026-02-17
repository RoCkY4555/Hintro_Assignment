import { Router } from 'express';
import controller from './controller.js';

const router = Router();

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create a booking (auto-triggers ride pooling)
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [passengerId, pickupLat, pickupLng, dropoffLat, dropoffLng]
 *             properties:
 *               passengerId:
 *                 type: string
 *                 format: uuid
 *               pickupLat:
 *                 type: number
 *                 example: 28.5562
 *               pickupLng:
 *                 type: number
 *                 example: 77.1000
 *               dropoffLat:
 *                 type: number
 *                 example: 28.6139
 *               dropoffLng:
 *                 type: number
 *                 example: 77.2090
 *               luggageCount:
 *                 type: integer
 *                 default: 1
 *               detourToleranceKm:
 *                 type: number
 *                 default: 5.0
 *     responses:
 *       201:
 *         description: Booking created, pooling triggered
 */
router.post('/', controller.create.bind(controller));

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: List bookings (paginated, filterable by status)
 *     tags: [Bookings]
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
 *           enum: [PENDING, POOLED, IN_TRANSIT, COMPLETED, CANCELLED]
 *     responses:
 *       200:
 *         description: List of bookings
 */
router.get('/', controller.list.bind(controller));

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     summary: Get booking details with ride info
 *     tags: [Bookings]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking details
 *       404:
 *         description: Not found
 */
router.get('/:id', controller.getById.bind(controller));

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Cancel a booking (re-optimizes ride if pooled)
 *     tags: [Bookings]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking cancelled
 *       404:
 *         description: Not found
 */
router.delete('/:id', controller.cancel.bind(controller));

export default router;
