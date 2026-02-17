import { Router } from 'express';
import controller from './controller.js';

const router = Router();

/**
 * @swagger
 * /api/cabs:
 *   post:
 *     summary: Register a new cab
 *     tags: [Cabs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [licensePlate, driverName]
 *             properties:
 *               licensePlate:
 *                 type: string
 *                 example: "DL-01-AB-1234"
 *               driverName:
 *                 type: string
 *                 example: "Raj Kumar"
 *               totalSeats:
 *                 type: integer
 *                 default: 4
 *               luggageCapacity:
 *                 type: integer
 *                 default: 4
 *               locationLat:
 *                 type: number
 *                 example: 28.5562
 *               locationLng:
 *                 type: number
 *                 example: 77.1000
 *     responses:
 *       201:
 *         description: Cab registered
 */
router.post('/', controller.create.bind(controller));

/**
 * @swagger
 * /api/cabs:
 *   get:
 *     summary: List all cabs (paginated)
 *     tags: [Cabs]
 *     parameters:
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *       - name: limit
 *         in: query
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of cabs
 */
router.get('/', controller.list.bind(controller));

/**
 * @swagger
 * /api/cabs/available:
 *   get:
 *     summary: List available cabs
 *     tags: [Cabs]
 *     responses:
 *       200:
 *         description: Available cabs
 */
router.get('/available', controller.listAvailable.bind(controller));

/**
 * @swagger
 * /api/cabs/{id}:
 *   get:
 *     summary: Get cab details
 *     tags: [Cabs]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cab details
 *       404:
 *         description: Cab not found
 */
router.get('/:id', controller.getById.bind(controller));

/**
 * @swagger
 * /api/cabs/{id}/status:
 *   patch:
 *     summary: Update cab status
 *     tags: [Cabs]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [status]
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [AVAILABLE, BUSY, OFFLINE]
 *     responses:
 *       200:
 *         description: Status updated
 */
router.patch('/:id/status', controller.updateStatus.bind(controller));

export default router;
