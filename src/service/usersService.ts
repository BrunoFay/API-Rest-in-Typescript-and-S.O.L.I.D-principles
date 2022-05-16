import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ILoginUser, INewUser, IUserModel } from '../interfaces';

dotenv.config();

class UserService {
  protected model: IUserModel;

  private token: string;

  constructor(dep: IUserModel) {
    this.model = dep;
    this.token = '';
  }

  async create(newUser: INewUser) {
    await this.model.create(newUser);
    await this.createToken(newUser);

    return this.token;
  }

  async checkIfUserexist(u: ILoginUser) {
    const [checkIfUserexist] = await this.model.getUserBylogin(u);
    if (checkIfUserexist.id) { return checkIfUserexist; }
  }

  async createToken(userInfos: INewUser) {
    const token = jwt.sign(
      { data: { username: userInfos.username } },
      process.env.JWT_SECRET || 'senhasecreta',
      {
        expiresIn: '7d',
        algorithm: 'HS256',
      },
    );
    this.token = token;
  }
}

export default UserService;
