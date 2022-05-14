import { Router } from 'express';
import LoginController from '../controller/loginController';
import LoginValidate from '../middlewares/loginValidate';
import connection from '../models/connection';
import LoginModel from '../models/loginModel';
import LoginService from '../service/loginService';

const router = Router();

const loginModel = new LoginModel(connection);
const loginService = new LoginService(loginModel);
const loginController = new LoginController(loginService);
const loginValidate = new LoginValidate();
router.post('/login', loginValidate.validate, loginController.login);
export default router;
