import { Router} from 'express';

import productController from '../controllers/productController.js';

const router = Router();

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getOneProduct);
router.post('/products/new', productController.createNewProduct);

export default router;