import prisma from './src/config/database.js';

async function checkState() {
    try {
        const passengers = await prisma.passenger.count();
        const cabs = await prisma.cab.count();
        const bookings = await prisma.booking.count({ where: { status: 'PENDING' } });
        const rides = await prisma.ride.count();

        console.log('--- Database State ---');
        console.log(`Passengers: ${passengers}`);
        console.log(`Cabs: ${cabs}`);
        console.log(`Pending Bookings: ${bookings}`);
        console.log(`Rides: ${rides}`);
        console.log('----------------------');

    } catch (e) {
        console.error('Error querying database:', e.message);
    } finally {
        await prisma.$disconnect();
    }
}

checkState();
