import { Router } from 'express';
import connection from '../models/connection';
import UsersController from '../controller/usersController';
import UsersService from '../service/usersService';
import UsersModel from '../models/usersModel';
import UserValidate from '../middlewares/userValidate';

const router = Router();
const usersModel = new UsersModel(connection);
const usersService = new UsersService(usersModel);
const usersController = new UsersController(usersService);
const userValidate = new UserValidate();
router.post('/users', userValidate.validate, usersController.create);

export default router;
