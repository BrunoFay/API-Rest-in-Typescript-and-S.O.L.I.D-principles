import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ILoginUser, ILoginModel } from '../interfaces';

dotenv.config();

class LoginService {
  protected model: ILoginModel;

  private token: string;

  constructor(dep: ILoginModel) {
    this.model = dep;
    this.token = '';
  }

  async login(user: ILoginUser) {
    const checkUser = await this.model.login(user);
    console.log(checkUser);
    
    if (checkUser?.length) {
      await this.createToken(user);
      return this.token;
    }
    return false;
  }

  async createToken(userInfos: ILoginUser) {
    const token = jwt.sign({
      data: {
        username: userInfos.username,
        password: userInfos.password,
      },
    }, process.env.JWT_SECRET || 'senhasecreta', {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    this.token = token;
  }
}

export default LoginService;
