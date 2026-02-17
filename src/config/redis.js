import Redis from 'ioredis';
import env from './env.js';
import logger from '../utils/logger.js';

let redis = null;

/**
 * Get or create a Redis client.
 * Falls back to an in-memory mock if Redis is unavailable (for local dev).
 */
export function getRedisClient() {
    if (redis) return redis;

    try {
        redis = new Redis({
            host: env.REDIS_HOST,
            port: env.REDIS_PORT,
            password: env.REDIS_PASSWORD || undefined,
            maxRetriesPerRequest: 3,
            retryStrategy(times) {
                if (times > 3) {
                    logger.warn('Redis unavailable – falling back to in-memory store');
                    return null; // stop retrying
                }
                return Math.min(times * 200, 2000);
            },
            lazyConnect: true,
        });

        redis.on('error', (err) => {
            logger.warn(`Redis error: ${err.message}. Using in-memory fallback.`);
        });

        // Attempt connection
        redis.connect().catch(() => {
            logger.warn('Redis connection failed – using in-memory fallback');
            redis = createInMemoryStore();
        });
    } catch {
        redis = createInMemoryStore();
    }

    return redis;
}

/**
 * In-memory fallback when Redis is not available.
 * Provides the same interface for lock/cache operations.
 */
export function createInMemoryStore() {
    const store = new Map();
    const locks = new Map();

    return {
        _isMemoryStore: true,

        async get(key) {
            const item = store.get(key);
            if (!item) return null;
            if (item.expiresAt && Date.now() > item.expiresAt) {
                store.delete(key);
                return null;
            }
            return item.value;
        },

        async set(key, value, ...args) {
            let ttl = null;
            // parse SET key value EX seconds or PX ms
            for (let i = 0; i < args.length; i += 2) {
                if (args[i] === 'EX') ttl = args[i + 1] * 1000;
                else if (args[i] === 'PX') ttl = args[i + 1];
            }
            store.set(key, {
                value,
                expiresAt: ttl ? Date.now() + ttl : null,
            });
            return 'OK';
        },

        async del(key) {
            store.delete(key);
            return 1;
        },

        async incr(key) {
            const current = parseInt((await this.get(key)) || '0', 10);
            const next = current + 1;
            store.set(key, { value: String(next), expiresAt: store.get(key)?.expiresAt || null });
            return next;
        },

        // Simple lock implementation
        async setnx(key, value) {
            if (locks.has(key)) return 0;
            locks.set(key, { value, expiresAt: Date.now() + 10000 });
            return 1;
        },

        // Mock eval for unlock script (Lua script execution mock)
        async eval(script, numKeys, ...args) {
            const key = args[0];
            const value = args[1];
            // Simple unlock logic matching the Lua script usually used
            if (locks.has(key) && locks.get(key).value === value) {
                locks.delete(key);
                return 1;
            }
            return 0;
        },

        on() { return this; },
        connect() { return Promise.resolve(); },
        disconnect() { return Promise.resolve(); },
        quit() { return Promise.resolve(); },
        status: 'ready',
    };
}
