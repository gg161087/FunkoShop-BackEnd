import categoryModel from '../models/categoryModel.js';

const getCategories= async () => {
    return await categoryModel.getCategories();
};

export default {
    getCategories,
};