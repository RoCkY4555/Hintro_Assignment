import { ZodError } from 'zod';
import logger from '../utils/logger.js';

/**
 * Global error handler middleware.
 * Catches all unhandled errors and returns a consistent JSON response.
 */
function errorHandler(err, req, res, _next) {
    // Zod validation errors
    if (err instanceof ZodError) {
        const errors = err.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
        }));
        return res.status(400).json({
            success: false,
            error: 'Validation failed',
            details: errors,
        });
    }

    // Prisma known request errors
    if (err.code === 'P2002') {
        return res.status(409).json({
            success: false,
            error: 'Duplicate entry',
            details: `Unique constraint violated on: ${err.meta?.target?.join(', ')}`,
        });
    }

    if (err.code === 'P2025') {
        return res.status(404).json({
            success: false,
            error: 'Record not found',
        });
    }

    // Custom status code errors
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';

    if (statusCode >= 500) {
        logger.error(`[${statusCode}] ${message}`, { stack: err.stack });
    } else {
        logger.warn(`[${statusCode}] ${message}`);
    }

    res.status(statusCode).json({
        success: false,
        error: message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
}

export default errorHandler;
