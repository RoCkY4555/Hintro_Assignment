import { PrismaClient } from '../generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import './env.js'; // Ensure env vars are loaded

const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

let prisma;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient({ adapter, log: ['error'] });
} else {
    // Reuse client in development to avoid too many connections
    if (!global.__prisma) {
        global.__prisma = new PrismaClient({ adapter, log: ['query', 'error', 'warn'] });
    }
    prisma = global.__prisma;
}

export default prisma;


