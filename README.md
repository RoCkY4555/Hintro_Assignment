# 🚖 Smart Airport Ride Pooling Backend

A high-performance Node.js backend system that groups airport passengers into shared cabs while optimizing routes and dynamic pricing.

## Tech Stack

| Component | Technology |
|---|---|
| Runtime | Node.js 22 |
| Framework | Express.js 5 |
| Database | PostgreSQL + Prisma ORM |
| Cache/Locks | Redis (ioredis) – auto-falls back to in-memory |
| Validation | Zod |
| API Docs | Swagger / OpenAPI 3.0 |
| Testing | Jest + Supertest |
| Logging | Winston |

## Architecture

```
┌─────────────────────────────────────────┐
│         Express.js Server (Cluster)      │
│  ┌──────────────────────────────────┐   │
│  │   API Layer (REST + Swagger)      │   │
│  │   /passengers /cabs /bookings     │   │
│  │   /rides       /pricing           │   │
│  └───────────┬──────────────────────┘   │
│              │                           │
│  ┌───────────▼──────────────────────┐   │
│  │        Service Layer              │   │
│  │   PassengerSvc  CabSvc           │   │
│  │   BookingSvc    RideSvc           │   │
│  └───────────┬──────────────────────┘   │
│              │                           │
│  ┌───────────▼──────────────────────┐   │
│  │        Engine Layer               │   │
│  │   PoolingEngine (Bin-Packing)     │   │
│  │   RouteOptimizer (NN-TSP)         │   │
│  │   PricingEngine (Surge+Pool)      │   │
│  └───────────┬──────────────────────┘   │
│              │                           │
│  ┌───────────▼───────┐  ┌───────────┐  │
│  │  PostgreSQL/Prisma │  │   Redis    │  │
│  │  (Data + Locks)    │  │  (Cache)   │  │
│  └───────────────────┘  └───────────┘  │
└─────────────────────────────────────────┘
```

## Quick Start

### Prerequisites

- **Node.js** >= 18
- **PostgreSQL** running locally (default: `localhost:5432`)
- **Redis** (optional – falls back to in-memory)

### 1. Install Dependencies

```bash
cd airport-ride-pooling
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env with your PostgreSQL connection string
```

### 3. Set Up Database

```bash
# Generate Prisma client, push schema, and seed sample data
npm run db:setup
```

### 4. Start Server

```bash
# Development (with hot-reload)
npm run dev

# Production (cluster mode)
npm start
```

### 5. Explore API

Open **Swagger UI**: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

Health check: `GET http://localhost:3000/health`

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/passengers` | Register a passenger |
| `GET` | `/api/passengers/:id` | Get passenger details |
| `GET` | `/api/passengers` | List passengers |
| `POST` | `/api/cabs` | Register a cab |
| `GET` | `/api/cabs/available` | List available cabs |
| `PATCH` | `/api/cabs/:id/status` | Update cab status |
| `POST` | `/api/bookings` | Create booking (auto-pools) |
| `GET` | `/api/bookings/:id` | Get booking with ride info |
| `DELETE` | `/api/bookings/:id` | Cancel booking |
| `POST` | `/api/rides/pool` | Manually trigger pooling |
| `GET` | `/api/rides/:id` | Get ride details |
| `PATCH` | `/api/rides/:id/confirm` | Confirm a ride |
| `PATCH` | `/api/rides/:id/complete` | Complete a ride |
| `GET` | `/api/pricing/estimate` | Get price estimate |

## Algorithms & Complexity

### 1. Ride Pooling Engine – Modified First-Fit Decreasing Bin-Packing

**Time**: O(n × m × k²) | **Space**: O(n + m)

- n = pending bookings, m = forming rides, k = stops per ride
- Sorts bookings by proximity, tries to fit into existing rides respecting seat, luggage, and detour constraints

### 2. Route Optimizer – Nearest-Neighbor TSP Heuristic

**Time**: O(k²) per ride | **Space**: O(k)

- Greedily picks nearest unvisited dropoff from current position
- Calculates per-passenger detour deviation

### 3. Dynamic Pricing

**Time**: O(1) | **Space**: O(1)

```
price = baseFare + (distance × perKmRate) + surgeCost - poolDiscount
surgeFactor = max(1, activeBookings / availableCabs)
poolDiscount = baseFare × 15% × (passengers - 1)
```

## Concurrency Handling

| Mechanism | Purpose |
|---|---|
| Redis Distributed Locks | Prevent double-assignment to rides |
| Optimistic Locking (`version` column) | Detect concurrent ride modifications |
| Database Transactions | Atomic multi-table updates |
| Node.js Cluster Mode | Multi-core utilization for high throughput |
| Rate Limiting | 100 req/min per IP (configurable) |

## Database Schema

5 tables with proper indexes:

- **passengers** – user profiles
- **cabs** – fleet with status tracking (indexed on `status`)
- **bookings** – ride requests with detour tolerance (indexed on `status`, `passenger_id`)
- **rides** – formed ride groups with optimistic lock version (indexed on `status`, `cab_id`)
- **ride_passengers** – junction table with sequence order and individual pricing

## Testing

```bash
# Run all tests
npm test

# Unit tests only
npm run test:unit
```

## Project Structure

```
src/
├── config/         # env, database, redis, swagger
├── engine/         # poolingEngine, routeOptimizer, pricingEngine
├── middleware/      # errorHandler, rateLimiter
├── modules/
│   ├── passenger/  # routes, controller, service, validation
│   ├── cab/        # routes, controller, service, validation
│   ├── booking/    # routes, controller, service, validation
│   └── ride/       # routes, controller, service, validation
├── utils/          # logger, distanceUtils, constants, lock
├── app.js          # Express app setup
└── server.js       # Cluster entry point
```

## Assumptions

1. All passengers are picked up at the airport (single origin point)
2. Delhi Airport (28.5562°N, 77.1000°E) used as default origin
3. Haversine formula used for distance (straight-line, not road distance)
4. Pooling window is per-trigger (manual or on booking creation)
5. Each booking is for a single passenger
6. Redis is optional – system works with in-memory fallback for local dev
