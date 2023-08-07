import { getConnection } from '../config/dbConfig.js';
const conn = getConnection();

const getProducts = async () => {
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
        return rows;
    } catch (e) { 
        return e;
    }
};

const getProductsByLicence = async (licence_id) => {
    try {
        const [rows] = await conn.query('SELECT * FROM product WHERE licence_id = ?', licence_id);
        return rows;
    } catch (e) { 
        return e;
    }
}

const getProduct = async (params) => {
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', params);
        return rows;
    } catch (e) { 
        return e; 
    }
};

const createProduct = async (params) => {
    try {
        const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;', [params]);
        return rows;
    } catch (e) { 
        return e;
    }
};

const editProduct = async (params, id) => {
    try {
        const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);
        return rows;
    } catch (e) { 
        return e;
    }
};

const deleteProduct = async (params) => {
    try {
        const [rows] = await conn.query('DELETE FROM product WHERE ?;', params);
        return rows;
    } catch (e) { 
        return e;
    }
};

export default {
    getProducts,
    getProductsByLicence,
    getProduct,
    createProduct,
    editProduct,
    deleteProduct
};