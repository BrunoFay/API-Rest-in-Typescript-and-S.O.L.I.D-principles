import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProductDB, INewProduct } from '../interfaces';

class ProductsModel {
  public connection: Pool;

  constructor(dep: Pool) {
    this.connection = dep;
  }

  public async getAll(): Promise<IProductDB[] | []> {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return result as IProductDB[];
  }

  public async create(product: INewProduct): Promise<IProductDB> {
    const result = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name,amount) VALUES (?,?)', 
      [product.name, product.amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return { id: insertId, ...product };
  }
}

export default ProductsModel;