import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import swaggerSpec from './config/swagger.js';
import errorHandler from './middleware/errorHandler.js';
import rateLimiter from './middleware/rateLimiter.js';

// Routes
import passengerRoutes from './modules/passenger/routes.js';
import cabRoutes from './modules/cab/routes.js';
import bookingRoutes from './modules/booking/routes.js';
import rideRoutes from './modules/ride/routes.js';

const app = express();

// ── Security & utility middleware ────────────────────────────────────
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(rateLimiter);

// ── Swagger UI ──────────────────────────────────────────────────────
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Airport Ride Pooling API',
}));

// ── Health check ────────────────────────────────────────────────────
app.get('/health', (req, res) => {
    res.json({
        success: true,
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});

// ── API Routes ──────────────────────────────────────────────────────
app.use('/api/passengers', passengerRoutes);
app.use('/api/cabs', cabRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/rides', rideRoutes);
app.use('/api/pricing', rideRoutes);  // price estimate also under /api/pricing

// ── 404 handler ─────────────────────────────────────────────────────
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: `Route ${req.method} ${req.url} not found`,
    });
});

// ── Global error handler ────────────────────────────────────────────
app.use(errorHandler);

export default app;
