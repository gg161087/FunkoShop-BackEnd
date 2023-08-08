import categoryModel from '../models/categoriesModel.js';

const getCategories= async () => {
    return await categoryModel.getCategories();
};

export default {
    getCategories,
};