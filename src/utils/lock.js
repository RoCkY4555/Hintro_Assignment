/**
 * Distributed Lock using Redis (simplified Redlock pattern)
 *
 * Provides mutual exclusion for concurrent ride assignment operations.
 * Falls back to in-memory locking when Redis is unavailable.
 */

import { v4 as uuidv4 } from 'uuid';
import { getRedisClient } from '../config/redis.js';
import { LOCK } from './constants.js';
import logger from './logger.js';

const UNLOCK_SCRIPT = `
  if redis.call("get", KEYS[1]) == ARGV[1] then
    return redis.call("del", KEYS[1])
  else
    return 0
  end
`;

/**
 * Acquire a distributed lock.
 *
 * @param {string} resource - Resource key to lock (e.g., "ride:<rideId>")
 * @param {number} [ttlMs=10000] - Lock TTL in ms
 * @returns {Promise<{ acquired: boolean, lockValue: string }>}
 */
export async function acquireLock(resource, ttlMs = LOCK.TTL_MS) {
    const redis = getRedisClient();
    const lockValue = uuidv4();
    const lockKey = `lock:${resource}`;

    for (let attempt = 0; attempt < LOCK.MAX_RETRIES; attempt++) {
        try {
            let result;
            if (redis._isMemoryStore) {
                result = await redis.setnx(lockKey, lockValue);
            } else {
                result = await redis.set(lockKey, lockValue, 'PX', ttlMs, 'NX');
            }

            if (result === 1 || result === 'OK') {
                logger.debug(`Lock acquired: ${lockKey}`);
                return { acquired: true, lockValue };
            }
        } catch (err) {
            logger.warn(`Lock attempt ${attempt + 1} failed: ${err.message}`);
        }

        // Wait before retrying
        await new Promise((resolve) => setTimeout(resolve, LOCK.RETRY_DELAY));
    }

    logger.warn(`Failed to acquire lock: ${lockKey} after ${LOCK.MAX_RETRIES} retries`);
    return { acquired: false, lockValue: null };
}

/**
 * Release a distributed lock.
 *
 * @param {string} resource - Resource key
 * @param {string} lockValue - The value used when acquiring
 * @returns {Promise<boolean>}
 */
export async function releaseLock(resource, lockValue) {
    const redis = getRedisClient();
    const lockKey = `lock:${resource}`;

    try {
        const result = await redis.eval(UNLOCK_SCRIPT, 1, lockKey, lockValue);
        const released = result === 1;
        if (released) {
            logger.debug(`Lock released: ${lockKey}`);
        }
        return released;
    } catch (err) {
        logger.error(`Error releasing lock ${lockKey}: ${err.message}`);
        return false;
    }
}
