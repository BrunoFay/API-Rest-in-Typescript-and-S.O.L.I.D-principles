import { Router } from 'express';
import connection from '../models/connection';
import OrdersController from '../controller/ordersController';
import OrdersService from '../service/ordersService';
import OrdersModel from '../models/ordersModel';
import JwtValidate from '../middlewares/jwtValidate';
import OrderValidate from '../middlewares/orderValidate';

const router = Router();
const ordersModel = new OrdersModel(connection);
const ordersService = new OrdersService(ordersModel);
const ordersController = new OrdersController(ordersService);
const validateJWT = new JwtValidate();
const orderValidate = new OrderValidate();

router.get('/orders', ordersController.getAll);
router.post(
  '/orders',
  validateJWT.validate,
  orderValidate.validate,
  ordersController.create,
);

export default router;
