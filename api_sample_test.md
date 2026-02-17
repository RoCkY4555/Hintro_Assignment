# API Sample Tests & Responses

This document provides sample `curl` commands and **assumed JSON responses** for the main API endpoints.

## Base URL
`http://localhost:3000`

---

## 1. Create Passenger
**Endpoint:** `POST /api/passengers`

### Request
```bash
curl -X POST http://localhost:3000/api/passengers \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Arjun Reddy",
    "phone": "+919876599999",
    "email": "arjun@example.com"
  }'
```

### Assumed Response (201 Created)
```json
{
  "id": "a1b2c3d4-e5f6-4a5b-8c9d-0123456789ab",
  "name": "Arjun Reddy",
  "phone": "+919876599999",
  "email": "arjun@example.com",
  "created_at": "2026-02-17T10:00:00.000Z",
  "updated_at": "2026-02-17T10:00:00.000Z"
}
```

---

## 2. Register Cab
**Endpoint:** `POST /api/cabs`

### Request
```bash
curl -X POST http://localhost:3000/api/cabs \
  -H "Content-Type: application/json" \
  -d '{
    "licensePlate": "DL1RT9999",
    "driverName": "Sandeep Kumar",
    "totalSeats": 4,
    "luggageCapacity": 3,
    "locationLat": 28.5562,
    "locationLng": 77.1000
  }'
```

### Assumed Response (201 Created)
```json
{
  "id": "c1c2c3c4-d5d6-4c5b-8c9d-0987654321zy",
  "licensePlate": "DL1RT9999",
  "driverName": "Sandeep Kumar",
  "totalSeats": 4,
  "luggageCapacity": 3,
  "status": "AVAILABLE",
  "locationLat": 28.5562,
  "locationLng": 77.1000,
  "created_at": "2026-02-17T10:05:00.000Z"
}
```

---

## 3. Create Booking (Ride Request)
**Endpoint:** `POST /api/bookings`

### Request
```bash
curl -X POST http://localhost:3000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "passengerId": "a1b2c3d4-e5f6-4a5b-8c9d-0123456789ab",
    "pickupLat": 28.5562,
    "pickupLng": 77.1000,
    "dropoffLat": 28.6139,
    "dropoffLng": 77.2090,
    "luggageCount": 1,
    "detourToleranceKm": 5
  }'
```

### Assumed Response (201 Created)
```json
{
  "id": "b1b2b3b4-e5f6-4a5b-8c9d-112233445566",
  "passengerId": "a1b2c3d4-e5f6-4a5b-8c9d-0123456789ab",
  "pickupLat": 28.5562,
  "pickupLng": 77.1000,
  "dropoffLat": 28.6139,
  "dropoffLng": 77.2090,
  "luggageCount": 1,
  "status": "PENDING",
  "detourToleranceKm": 5,
  "created_at": "2026-02-17T10:10:00.000Z",
  "passenger": {
    "name": "Arjun Reddy",
    "phone": "+919876599999"
  }
}
```

---

## 4. Trigger Pooling Engine
**Endpoint:** `POST /api/rides/pool`

### Request
```bash
curl -X POST http://localhost:3000/api/rides/pool
```

### Assumed Response (200 OK)
```json
{
  "success": true,
  "data": {
    "pooledCount": 1,
    "newRidesCreated": 1,
    "errors": []
  }
}
```

---

## 5. Get Booking Details (Check Status)
**Endpoint:** `GET /api/bookings/:id`

### Request
```bash
curl http://localhost:3000/api/bookings/b1b2b3b4-e5f6-4a5b-8c9d-112233445566
```

### Assumed Response (200 OK) - After Pooling
```json
{
  "id": "b1b2b3b4-e5f6-4a5b-8c9d-112233445566",
  "status": "POOLED",
  "ridePassengers": [
    {
      "sequenceOrder": 1,
      "individualPrice": 350.50,
      "pickupEta": 5,
      "ride": {
        "id": "r1r2r3r4-e5f6-4a5b-8c9d-998877665544",
        "status": "FORMING",
        "totalDistance": 12.5,
        "totalPrice": 350.50,
        "cab": {
          "licensePlate": "DL1RT9999",
          "driverName": "Sandeep Kumar"
        }
      }
    }
  ]
}
```

---

## 6. List All Bookings
**Endpoint:** `GET /api/bookings?page=1&limit=10`

### Request
```bash
curl "http://localhost:3000/api/bookings?page=1&limit=10"
```

### Assumed Response (200 OK)
```json
{
  "bookings": [
    {
      "id": "b1b2b3b4-e5f6-4a5b-8c9d-112233445566",
      "status": "POOLED",
      "passenger": { "name": "Arjun Reddy" }
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 10
}
```

---

## 7. Cancel Booking
**Endpoint:** `POST /api/bookings/:id/cancel`

### Request
```bash
curl -X POST http://localhost:3000/api/bookings/b1b2b3b4-e5f6-4a5b-8c9d-112233445566/cancel
```

### Assumed Response (200 OK)
```json
{
  "id": "b1b2b3b4-e5f6-4a5b-8c9d-112233445566",
  "status": "CANCELLED",
  "passenger": {
    "name": "Arjun Reddy"
  }
}
```
