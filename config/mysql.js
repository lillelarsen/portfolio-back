const environment = process.env.NODE_ENV || 'development';
const { createPool } = require('mysql2/promise');

if(environment === 'development') {
    module.exports = (function(){
        return createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            connectionLimit: 10,
            port: process.env.DB_PORT,
            namedPlaceholders: true
        });
    })();
} else if(environment === 'test') {
    module.exports = (function(){
        return createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_TEST_DATABASE,
            connectionLimit: 10,
            port: process.env.DB_PORT,
            namedPlaceholders: true
        });
    })();
}