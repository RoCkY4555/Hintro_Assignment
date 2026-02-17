/**
 * Server Entry Point with Cluster Mode
 *
 * Uses Node.js cluster module to fork worker processes (one per CPU core)
 * for handling high concurrency (10k+ concurrent users target).
 *
 * In development, runs a single process for easier debugging.
 */

import cluster from 'cluster';
import os from 'os';
import env from './config/env.js';
import logger from './utils/logger.js';
import app from './app.js';

if (env.NODE_ENV === 'production' && cluster.isPrimary) {
    const numCPUs = os.cpus().length;
    logger.info(`Primary process ${process.pid} starting ${numCPUs} workers`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        logger.warn(
            `Worker ${worker.process.pid} exited (code: ${code}, signal: ${signal}). Restarting...`
        );
        cluster.fork();
    });
} else {

    const server = app.listen(env.PORT, () => {
        logger.info(
            `🚀 Server running on port ${env.PORT} (PID: ${process.pid}, ENV: ${env.NODE_ENV})`
        );
        logger.info(`📚 Swagger docs: http://localhost:${env.PORT}/api-docs`);
        logger.info(`❤️  Health check: http://localhost:${env.PORT}/health`);
    });

    // Graceful shutdown
    const shutdown = async (signal) => {
        logger.info(`${signal} received – shutting down gracefully`);
        server.close(() => {
            logger.info('HTTP server closed');
            process.exit(0);
        });

        // Force exit after 10 seconds
        setTimeout(() => {
            logger.error('Forced shutdown after timeout');
            process.exit(1);
        }, 10000);
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));
}
