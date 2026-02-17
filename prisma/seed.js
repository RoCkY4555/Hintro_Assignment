import prisma from '../src/config/database.js';

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.ridePassenger.deleteMany();
  await prisma.ride.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.cab.deleteMany();
  await prisma.passenger.deleteMany();

  // Create passengers
  const passengers = await Promise.all([
    prisma.passenger.create({
      data: { name: 'Alice Johnson', phone: '+911234567801', email: 'alice@example.com' },
    }),
    prisma.passenger.create({
      data: { name: 'Bob Smith', phone: '+911234567802', email: 'bob@example.com' },
    }),
    prisma.passenger.create({
      data: { name: 'Carol Williams', phone: '+911234567803', email: 'carol@example.com' },
    }),
    prisma.passenger.create({
      data: { name: 'David Brown', phone: '+911234567804', email: 'david@example.com' },
    }),
    prisma.passenger.create({
      data: { name: 'Eve Davis', phone: '+911234567805', email: 'eve@example.com' },
    }),
    prisma.passenger.create({
      data: { name: 'Frank Miller', phone: '+911234567806', email: 'frank@example.com' },
    }),
    prisma.passenger.create({
      data: { name: 'Grace Wilson', phone: '+911234567807', email: 'grace@example.com' },
    }),
    prisma.passenger.create({
      data: { name: 'Henry Moore', phone: '+911234567808', email: 'henry@example.com' },
    }),
  ]);

  console.log(`  ✅ Created ${passengers.length} passengers`);

  // Airport coordinates (Delhi Airport as reference)
  const AIRPORT = { lat: 28.5562, lng: 77.1000 };

  // Create cabs (positioned near airport)
  const cabs = await Promise.all([
    prisma.cab.create({
      data: {
        licensePlate: 'DL-01-AB-1234',
        driverName: 'Raj Kumar',
        totalSeats: 4,
        luggageCapacity: 4,
        status: 'AVAILABLE',
        locationLat: AIRPORT.lat + 0.001,
        locationLng: AIRPORT.lng + 0.001,
      },
    }),
    prisma.cab.create({
      data: {
        licensePlate: 'DL-01-CD-5678',
        driverName: 'Suresh Patel',
        totalSeats: 4,
        luggageCapacity: 4,
        status: 'AVAILABLE',
        locationLat: AIRPORT.lat - 0.001,
        locationLng: AIRPORT.lng + 0.002,
      },
    }),
    prisma.cab.create({
      data: {
        licensePlate: 'DL-01-EF-9012',
        driverName: 'Amit Singh',
        totalSeats: 6,
        luggageCapacity: 6,
        status: 'AVAILABLE',
        locationLat: AIRPORT.lat + 0.002,
        locationLng: AIRPORT.lng - 0.001,
      },
    }),
    prisma.cab.create({
      data: {
        licensePlate: 'DL-01-GH-3456',
        driverName: 'Vikram Rao',
        totalSeats: 4,
        luggageCapacity: 3,
        status: 'AVAILABLE',
        locationLat: AIRPORT.lat,
        locationLng: AIRPORT.lng + 0.003,
      },
    }),
    prisma.cab.create({
      data: {
        licensePlate: 'DL-01-IJ-7890',
        driverName: 'Manoj Sharma',
        totalSeats: 4,
        luggageCapacity: 4,
        status: 'OFFLINE',
        locationLat: AIRPORT.lat - 0.005,
        locationLng: AIRPORT.lng - 0.005,
      },
    }),
  ]);

  console.log(`  ✅ Created ${cabs.length} cabs`);

  // Create sample pending bookings (passengers going from airport to various destinations)
  const bookings = await Promise.all([
    prisma.booking.create({
      data: {
        passengerId: passengers[0].id,
        pickupLat: AIRPORT.lat,
        pickupLng: AIRPORT.lng,
        dropoffLat: 28.6139,  // Connaught Place
        dropoffLng: 77.2090,
        luggageCount: 1,
        detourToleranceKm: 5.0,
        status: 'PENDING',
      },
    }),
    prisma.booking.create({
      data: {
        passengerId: passengers[1].id,
        pickupLat: AIRPORT.lat,
        pickupLng: AIRPORT.lng,
        dropoffLat: 28.6280,  // Karol Bagh
        dropoffLng: 77.1900,
        luggageCount: 2,
        detourToleranceKm: 4.0,
        status: 'PENDING',
      },
    }),
    prisma.booking.create({
      data: {
        passengerId: passengers[2].id,
        pickupLat: AIRPORT.lat,
        pickupLng: AIRPORT.lng,
        dropoffLat: 28.5355,  // Gurgaon Cyber City
        dropoffLng: 77.3910,
        luggageCount: 1,
        detourToleranceKm: 6.0,
        status: 'PENDING',
      },
    }),
    prisma.booking.create({
      data: {
        passengerId: passengers[3].id,
        pickupLat: AIRPORT.lat,
        pickupLng: AIRPORT.lng,
        dropoffLat: 28.6100,  // Near Connaught Place
        dropoffLng: 77.2200,
        luggageCount: 1,
        detourToleranceKm: 5.0,
        status: 'PENDING',
      },
    }),
    prisma.booking.create({
      data: {
        passengerId: passengers[4].id,
        pickupLat: AIRPORT.lat,
        pickupLng: AIRPORT.lng,
        dropoffLat: 28.5245,  // Gurgaon Sector 29
        dropoffLng: 77.3570,
        luggageCount: 3,
        detourToleranceKm: 3.0,
        status: 'PENDING',
      },
    }),
  ]);

  console.log(`  ✅ Created ${bookings.length} sample bookings`);
  console.log('\n🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
