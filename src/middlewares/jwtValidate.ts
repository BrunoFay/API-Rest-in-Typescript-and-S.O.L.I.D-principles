import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UsersModel from '../models/usersModel';
import UsersService from '../service/usersService';

const usersModel = new UsersModel(connection);
const usersService = new UsersService(usersModel);

class JwtValidate {
  private segredo: string;

  constructor() {
    this.segredo = 'batatinha123';
  }

  public validate: RequestHandler = async (req, res, next) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({ message: 'Token not found' });
      }

      const decoded:any = jwt.verify(token, this.segredo);
      const isUserValid = await usersService.checkIfUserexist(decoded.data);
      console.log(isUserValid);

      if (!isUserValid) return res.status(401).json({ message: 'Invalid token' });
      req.body = { ...req.body, user: isUserValid.id };

      next();
    } catch (error) {
      return res
        .status(401)
        .json({ message: 'Invalid token' });
    }
  };
}
export default JwtValidate;