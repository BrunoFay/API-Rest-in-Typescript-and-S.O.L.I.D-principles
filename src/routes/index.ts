import { Router } from 'express';
import ProductsController from '../controller/productsController';
import ProductsModel from '../models/productsModel';
import connection from '../models/connection';
import ProductsService from '../service/productsService';
import ProductValidate from '../middlewares/productsValidate';
import UsersController from '../controller/usersController';
import UsersService from '../service/usersService';
import UsersModel from '../models/usersModel';
import UserValidate from '../middlewares/userValidate';

const router = Router();
const productsModel = new ProductsModel(connection);
const productsService = new ProductsService(productsModel);
const productsController = new ProductsController(productsService);
const productValidate = new ProductValidate();
const usersModel = new UsersModel(connection);
const usersService = new UsersService(usersModel);
const usersController = new UsersController(usersService);
const userValidate = new UserValidate();

router.get('/products', productsController.getAll);
router.post('/products', productValidate.validate, productsController.create);
router.post('/users', userValidate.validate, usersController.create);
export default router;