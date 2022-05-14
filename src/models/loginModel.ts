import { Pool } from 'mysql2/promise';
import { ILoginUser, IUserDB } from '../interfaces';

class LoginModel {
  public connection: Pool;

  constructor(dep: Pool) {
    this.connection = dep;
  }

  public async login(user: ILoginUser):Promise<IUserDB[] | null> {
    const [userExist] = await this.connection
      .execute(
        'SELECT * FROM Trybesmith.Users WHERE username = ?  AND password = ?; ;',
        [user.username, user.password],
      );
    return userExist as IUserDB[]; 
  }
}

export default LoginModel;