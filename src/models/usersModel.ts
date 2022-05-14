import { Pool, ResultSetHeader } from 'mysql2/promise';
import { INewUser } from '../interfaces';

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
}

export default UserModel;