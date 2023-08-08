import express from 'express';
import morgan from 'morgan';

import { PORT } from './config.js';
import productRoutes from './routes/product.routes.js';

const app = express();

//Settings
app.set('port', PORT);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use('/api/products', productRoutes);

export default app;