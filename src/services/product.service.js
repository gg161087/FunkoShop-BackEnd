import productModel from '../models/product.model.js';

const getAllProducts = async () => {
    try {
        const products = await productModel.getAllProducts();
        return products; 
    } catch (error) {
        throw new Error('Error al obtener los productos');
    }
}

const getProductsByLicence = async (licence_id) => {
    return await productModel.getProductsByLicence(licence_id);
}

const getProduct = async (id) => {
    try {
        const product = await productModel.getProduct({ product_id: id });
        return product 
    } catch (error) {
        throw new Error('Error al obtener producto');
    }
}

const createProduct = async (body) => {           
    const itemSchema = {
        product_name: body.name,
        product_description: body.description,
        price: body.price,
        stock: body.stock,
        discount: body.discount,
        sku: body.sku,
        dues: body.dues,
        image_front: body.image_front,
        image_back: body.image_back,
        licence_id: body.licence,
        category_id: body.category
    }
    return await productModel.createProduct([Object.values(itemSchema)]);
}

const editProduct = async (body, id) => {   
    const productScheme = {
        product_name: body.name,
        product_description: body.description,
        price: body.price,
        stock: body.stock,
        discount: body.discount,
        sku: body.sku,
        dues: body.dues,
        image_front: body.image_front,
        image_back: body.image_back,
        licence_id: body.licence,
        category_id: body.category
    }
    return await productModel.editProduct(productScheme, { product_id: id });
}

const deleteProduct = async (id) => {
    return await productModel.deleteProduct({ product_id: id });
}

export default {
    getAllProducts,
    getProductsByLicence,
    getProduct,
    createProduct,
    editProduct,
    deleteProduct
}