// Debug script to check imports
async function testImports() {
    // Suppress console logs from imported modules if possible, but hard to do.
    // We just hope for the best.

    const modules = [
        './src/modules/passenger/routes.js',
        './src/modules/cab/routes.js',
        './src/modules/booking/routes.js',
        './src/modules/ride/routes.js',
        './src/middleware/errorHandler.js',
        './src/middleware/rateLimiter.js',
        './src/config/swagger.js',
        './src/config/database.js',
        './src/config/env.js'
    ];

    for (const mod of modules) {
        try {
            await import(mod);
            // console.log(`OK: ${mod}`);
        } catch (e) {
            console.error(`FAIL: ${mod}`);
            console.error(e.message);
            // console.error(e.stack); // Stack might be too long
            return;
        }
    }
    console.log('All imports successful.');
}

testImports();
