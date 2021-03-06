const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL || 'postgres://postgres:password@localhost:61349/nielsen');

module.exports = db;

