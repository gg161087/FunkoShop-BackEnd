import { getConnection } from '../database/database.js';

const getAllProducts = async () => {
    const connection = getConnection();
    try {
        const [rows] = await connection.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
        return rows;
    } catch (e) { 
        return e;
    }
};

const getProductsByLicence = async (licence_id) => {
    const connection = getConnection();
    try {
        const [rows] = await connection.query('SELECT * FROM product WHERE licence_id = ?', licence_id);
        return rows;
    } catch (e) { 
        throw new Error('Error al obtener los productos');
    }
}

const getProduct = async (params) => {
    const connection = getConnection();
    try {
        const [rows] = await connection.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', params);
        if (rows.length > 0) {
            return rows;
        } else {
            throw new Error('Producto no encontrado');
        }        
    } catch (e) { 
        throw new Error('Error al obtener producto');
    }
};

const createProduct = async (params) => {
    const connection = getConnection();
    try {
        const [rows] = await connection.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;', [params]);
        return rows;
    } catch (e) { 
        return e;
    }
};

const editProduct = async (params, id) => {
    const connection = getConnection();
    try {
        const [rows] = await connection.query('UPDATE product SET ? WHERE ?;', [params, id]);
        return rows;
    } catch (e) { 
        return e;
    }
};

const deleteProduct = async (params) => {
    const connection = getConnection();
    try {
        const [rows] = await connection.query('DELETE FROM product WHERE ?;', params);
        return rows;
    } catch (e) { 
        return e;
    }
};

export default {
    getAllProducts,
    getProductsByLicence,
    getProduct,
    createProduct,
    editProduct,
    deleteProduct
};