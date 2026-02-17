import rateLimit from 'express-rate-limit';
import env from '../config/env.js';

/**
 * Rate limiter middleware.
 * Limits to RATE_LIMIT_MAX_REQUESTS per RATE_LIMIT_WINDOW_MS window.
 * Target: 100 requests/second as per assignment requirements.
 */
const limiter = rateLimit({
    windowMs: env.RATE_LIMIT_WINDOW_MS,
    max: env.RATE_LIMIT_MAX_REQUESTS,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        error: 'Too many requests, please try again later',
    },
});

export default limiter;
