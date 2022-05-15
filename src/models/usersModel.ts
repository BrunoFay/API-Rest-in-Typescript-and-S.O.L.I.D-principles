import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ILoginUser, INewUser, IUserDB } from '../interfaces';

class UserModel {
  public connection: Pool;

  constructor(dep: Pool) {
    this.connection = dep;
  }

  public async create(user: INewUser) {
    await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username,classe,level,password) VALUES (?,?,?,?)', 
      [user.username, user.classe, user.level, user.password],
    );
  }

  public async getUserBylogin(u:ILoginUser): Promise<IUserDB[] | []> {
    const [result] = await this.connection
      .execute(
        'SELECT id,password,username FROM Trybesmith.Users WHERE username = ? AND password = ?;',
        [u.username, u.password],
      );
    return result as IUserDB[];
  }
}

export default UserModel;