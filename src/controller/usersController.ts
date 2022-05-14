import { RequestHandler } from 'express';
import { IUserService } from '../interfaces';

class UsersController {
  UsersService: IUserService;

  constructor(dep: IUserService) {
    this.UsersService = dep;
  }

  public create: RequestHandler = async (req, res, next) => {
    try {
      const token = await this.UsersService.create(req.body);
      res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  };
}
export default UsersController;