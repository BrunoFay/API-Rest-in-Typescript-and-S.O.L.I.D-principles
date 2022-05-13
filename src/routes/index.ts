import { Router } from 'express';
import ProductsController from '../controller';
import ProductsModel from '../models';
import connection from '../models/connection';
import ProductsService from '../service';
import ProductValidate from '../middlewares/productsValidate';

const router = Router();
const productsModel = new ProductsModel(connection);
const productsService = new ProductsService(productsModel);
const productsController = new ProductsController(productsService);
const productValidate = new ProductValidate();

router.get('/', productsController.getAll);
router.post('/', productValidate.validate, productsController.create);
export default router;