import { RequestHandler } from 'express';
import { ILoginService } from '../interfaces';

class LoginController {
  LoginService: ILoginService;

  constructor(dep: ILoginService) {
    this.LoginService = dep;
  }

  public login: RequestHandler = async (req, res, next) => {
    try {
      const hastoken = await this.LoginService.login(req.body);
      if (!hastoken) return res.status(401).json({ message: 'Username or password invalid' });
      return res.status(200).json({ token: hastoken });
    } catch (error) {
      next(error);
    }
  };
}
export default LoginController;