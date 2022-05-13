import { Router } from 'express';
import ProductsController from '../controller';
import ProductsModel from '../models';
import connection from '../models/connection';
import ProductsService from '../service';

const router = Router();
const productsModel = new ProductsModel(connection);
const productsService = new ProductsService(productsModel);
const productsController = new ProductsController(productsService);
router.get('/', productsController.getAll);
export default router;