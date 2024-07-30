// lib/db.js
import pgPromise from 'pg-promise';

const pgp = pgPromise({});
const db = pgp(process.env.DATABASE_URL);

export default db;
