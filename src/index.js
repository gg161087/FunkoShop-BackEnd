import express from 'express';

import { HOST, PORT } from './config/serverConfig.js';
import productRoutes from './routes/productRoutes.js';

const app = express();

app.set('port', PORT);

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/v1', productRoutes);

app.listen(PORT, () => {console.log(`Server running http://${HOST}:${PORT}`)});