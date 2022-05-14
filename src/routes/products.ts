import { Router } from 'express';
import ProductsController from '../controller/productsController';
import ProductsModel from '../models/productsModel';
import connection from '../models/connection';
import ProductsService from '../service/productsService';
import ProductValidate from '../middlewares/productsValidate';

const router = Router();
const productsModel = new ProductsModel(connection);
const productsService = new ProductsService(productsModel);
const productsController = new ProductsController(productsService);
const productValidate = new ProductValidate();

router.get('/products', productsController.getAll);
router.post('/products', productValidate.validate, productsController.create);

export default router;