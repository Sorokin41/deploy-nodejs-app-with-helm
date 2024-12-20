const Pool = require('pg').Pool
const logger = require('../logger/logger')

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: 'my-app-postgresql',
    port: 5432,
    database: process.env.POSTGRES_DB
});

pool.query(`
    create TABLE IF NOT EXISTS person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255));
`).then(() => {
    logger.log('info', 'Table is successfully created or already exists');
})


module.exports = pool;