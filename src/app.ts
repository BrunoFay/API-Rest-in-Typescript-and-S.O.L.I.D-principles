import express from 'express';
import ErrorsFuntions from './middlewares/handleError';
import productsRoute from './routes/products';
import loginRoute from './routes/login';
import ordersRoute from './routes/orders';
import usersRoute from './routes/users';

const app = express();
const errorsMiddlewares = new ErrorsFuntions();
app.use(express.json());
app.use('/', loginRoute);
app.use('/', productsRoute);
app.use('/', ordersRoute);
app.use('/', usersRoute);

app.use(errorsMiddlewares.generic);
export default app;
