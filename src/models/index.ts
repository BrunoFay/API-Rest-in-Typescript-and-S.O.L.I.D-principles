import { Pool } from 'mysql2/promise';
import { IBookDB } from '../interfaces';

class ProductsModel {
  public connection: Pool;

  constructor(dep: Pool) {
    this.connection = dep;
  }

  public async getAll(): Promise<IBookDB[] | []> {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return result as IBookDB[];
  }
} 
export default ProductsModel;