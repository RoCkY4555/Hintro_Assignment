# Architecture & Design Documentation

## High Level Architecture

```
                    ┌─────────────────┐
                    │   Client Apps    │
                    │  (Postman/Web)   │
                    └────────┬────────┘
                             │ HTTP
                    ┌────────▼────────┐
                    │  Rate Limiter    │
                    │  (100 req/min)   │
                    └────────┬────────┘
                             │
        ┌────────────────────▼────────────────────┐
        │         Express.js + Cluster Mode         │
        │                                           │
        │  Worker 1  │  Worker 2  │  Worker N       │
        │  (CPU 1)   │  (CPU 2)   │  (CPU N)       │
        └──────┬─────┴─────┬──────┴───┬────────────┘
               │           │          │
        ┌──────▼───────────▼──────────▼────────────┐
        │            API Routes Layer                │
        │  /passengers  /cabs  /bookings  /rides     │
        └──────────────────┬───────────────────────┘
                           │
        ┌──────────────────▼───────────────────────┐
        │          Service Layer                     │
        │  PassengerService  │  CabService           │
        │  BookingService    │  RideService           │
        └──────────────────┬───────────────────────┘
                           │
        ┌──────────────────▼───────────────────────┐
        │          Engine Layer                      │
        │  ┌──────────────────────┐                  │
        │  │   Pooling Engine      │ Bin-Packing      │
        │  │   (n × m × k²)       │ Algorithm         │
        │  └──────────┬───────────┘                  │
        │             │                              │
        │  ┌──────────▼───────────┐                  │
        │  │  Route Optimizer      │ Nearest-Neighbor │
        │  │  (k² per ride)        │ TSP Heuristic    │
        │  └──────────┬───────────┘                  │
        │             │                              │
        │  ┌──────────▼───────────┐                  │
        │  │  Pricing Engine       │ Surge + Pool     │
        │  │  (O(1))              │ Discount          │
        │  └──────────────────────┘                  │
        └──────────────────┬───────────────────────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
   ┌──────▼──────┐  ┌─────▼──────┐  ┌──────▼──────┐
   │ PostgreSQL   │  │   Redis     │  │  In-Memory   │
   │ (Prisma ORM) │  │ (Locks/    │  │  Fallback    │
   │              │  │  Cache)    │  │              │
   └─────────────┘  └────────────┘  └──────────────┘
```

## Class / Module Diagram

```
┌──────────────────────────────────────────────────────┐
│                     Modules                           │
├──────────────┬──────────────┬──────────────┬─────────┤
│  Passenger   │     Cab      │   Booking    │  Ride   │
│  - routes    │  - routes    │  - routes    │ - routes│
│  - controller│  - controller│  - controller│ - ctrl  │
│  - service   │  - service   │  - service   │ - svc   │
│  - validation│  - validation│  - validation│         │
└──────┬───────┴──────┬───────┴──────┬───────┴────┬────┘
       │              │              │            │
       │         ┌────▼────────────────────────┐  │
       │         │      Engine Layer            │  │
       │         │                              │  │
       │         │  PoolingEngine               │  │
       │         │    ├── uses RouteOptimizer   │  │
       │         │    ├── uses PricingEngine    │  │
       │         │    └── uses DistanceLock     │  │
       │         │                              │  │
       │         │  RouteOptimizer              │  │
       │         │    └── uses DistanceUtils    │  │
       │         │                              │  │
       │         │  PricingEngine               │  │
       │         │    └── uses Constants        │  │
       │         └──────────────────────────────┘  │
       │                                           │
       └────────────────┬──────────────────────────┘
                        │
                ┌───────▼───────┐
                │  Prisma ORM   │
                │  (DB Layer)   │
                └───────────────┘
```

## Design Patterns Used

| Pattern | Where | Purpose |
|---------|-------|---------|
| **Repository (via Prisma)** | Service layer | Abstracts DB operations |
| **Service Layer** | `*Service` classes | Business logic separation |
| **Strategy** | Engine layer | Swappable algorithms |
| **Singleton** | Prisma client, Redis | Single DB/cache connection |
| **Optimistic Locking** | `rides.version` | Concurrent write safety |
| **Distributed Lock** | Redis / in-memory | Mutual exclusion |
| **Cluster** | `server.js` | Multi-process scaling |

## Database ER Diagram

```
┌────────────┐     ┌──────────────┐     ┌──────────────┐
│ passengers │     │   bookings   │     │    cabs      │
├────────────┤     ├──────────────┤     ├──────────────┤
│ id (PK)    │◄────│ passenger_id │     │ id (PK)      │
│ name       │     │ id (PK)      │     │ license_plate│
│ phone (UK) │     │ pickup_lat   │     │ driver_name  │
│ email (UK) │     │ pickup_lng   │     │ total_seats  │
│ created_at │     │ dropoff_lat  │     │ luggage_cap  │
└────────────┘     │ dropoff_lng  │     │ status (IDX) │
                   │ luggage_count│     │ location_lat │
                   │ status (IDX) │     │ location_lng │
                   │ detour_tol   │     └──────┬───────┘
                   └──────┬───────┘            │
                          │                    │
                   ┌──────▼───────────────┐    │
                   │  ride_passengers     │    │
                   ├─────────────────────┤    │
                   │ id (PK)             │    │
                   │ ride_id (FK)────────┼───►│
                   │ booking_id (FK)     │    │
                   │ sequence_order      │    │
                   │ individual_price    │    │
                   │ pickup_eta          │    │
                   │ UK(ride_id+booking) │    │
                   └──────┬──────────────┘    │
                          │                    │
                   ┌──────▼───────────┐        │
                   │     rides        │        │
                   ├──────────────────┤        │
                   │ id (PK)          │        │
                   │ cab_id (FK) ─────┼────────┘
                   │ status (IDX)     │
                   │ route_json       │
                   │ total_distance   │
                   │ total_price      │
                   │ version (OCC)    │
                   └──────────────────┘
```

## Concurrency Flow

```
Booking Request ──► Acquire Redis Lock (ride:ID)
                         │
                    ├── Lock acquired ──► Check constraints
                    │                          │
                    │                    ├── Fits ──► DB Transaction
                    │                    │              │
                    │                    │         ├── Optimistic lock check (version)
                    │                    │         ├── Update ride + passengers
                    │                    │         └── Commit
                    │                    │
                    │                    └── Doesn't fit ──► Try next ride
                    │
                    └── Lock failed ──► Retry with backoff (max 5)
```
