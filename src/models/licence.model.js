import { getConnection } from '../config.js';

const getLicences = async () => {
    const conn = getConnection();
    try {
        const [rows] = await conn.query('SELECT * FROM licence;');
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos recuperar los datos ${e}.`
        };
        return error;      
    }
};

const getLicence = async (id) => {
    const conn = getConnection();
    try {
        const [rows] = await conn.query('SELECT * FROM licence WHERE licence_id = ?', id);
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos recuperar los datos ${e}.`
        };
        return error;      
    }
};

export default {
    getLicences,
    getLicence
}