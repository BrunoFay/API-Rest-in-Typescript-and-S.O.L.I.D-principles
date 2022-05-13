import express from 'express';
import ErrorsFuntions from './middlewares/handleError';
import productsRoute from './routes';

const app = express();
const errorsMiddlewares = new ErrorsFuntions();
app.use(express.json());
app.use('/products', productsRoute);
app.use(errorsMiddlewares.generic);
export default app;
