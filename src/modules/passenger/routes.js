import { Router } from 'express';
import controller from './controller.js';

const router = Router();

/**
 * @swagger
 * /api/passengers:
 *   post:
 *     summary: Register a new passenger
 *     tags: [Passengers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, phone, email]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Alice Johnson"
 *               phone:
 *                 type: string
 *                 example: "+911234567801"
 *               email:
 *                 type: string
 *                 example: "alice@example.com"
 *     responses:
 *       201:
 *         description: Passenger created
 */
router.post('/', controller.create.bind(controller));

/**
 * @swagger
 * /api/passengers:
 *   get:
 *     summary: List all passengers (paginated)
 *     tags: [Passengers]
 *     parameters:
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *           default: 1
 *       - name: limit
 *         in: query
 *         schema:
 *           type: integer
 *           default: 20
 *     responses:
 *       200:
 *         description: List of passengers
 */
router.get('/', controller.list.bind(controller));

/**
 * @swagger
 * /api/passengers/{id}:
 *   get:
 *     summary: Get passenger details
 *     tags: [Passengers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Passenger details
 *       404:
 *         description: Passenger not found
 */
router.get('/:id', controller.getById.bind(controller));

export default router;
