import 'dotenv/config';

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_NAME = process.env.DB_NAME || 'funkoshop';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export {
    PORT,
    HOST,
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    JWT_SECRET
}