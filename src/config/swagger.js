import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Airport Ride Pooling API',
            version: '1.0.0',
            description:
                'Smart Airport Ride Pooling Backend System – Groups passengers into shared cabs, optimizes routes and pricing, handles real-time cancellations.',
            contact: {
                name: 'Developer',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local development',
            },
        ],
        tags: [
            { name: 'Passengers', description: 'Passenger management' },
            { name: 'Cabs', description: 'Cab fleet management' },
            { name: 'Bookings', description: 'Booking lifecycle management' },
            { name: 'Rides', description: 'Ride management and pooling' },
            { name: 'Pricing', description: 'Dynamic pricing' },
        ],
    },
    apis: ['./src/modules/*/routes.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
