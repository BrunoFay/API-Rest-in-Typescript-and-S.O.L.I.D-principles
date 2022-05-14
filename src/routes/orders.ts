import { Router } from 'express';
import connection from '../models/connection';
import OrdersController from '../controller/ordersController';
import OrdersService from '../service/ordersService';
import OrdersModel from '../models/ordersModel';

const router = Router();
const ordersModel = new OrdersModel(connection);
const ordersService = new OrdersService(ordersModel);
const ordersController = new OrdersController(ordersService);

router.get('/orders', ordersController.getAll);

export default router;
