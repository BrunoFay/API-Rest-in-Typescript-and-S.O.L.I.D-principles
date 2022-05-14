import { Pool } from 'mysql2/promise';
import { IOrderDB } from '../interfaces';

class OrdersModel {
  public connection: Pool;

  ordersFormated: IOrderDB[];

  constructor(dep: Pool) {
    this.connection = dep;
    this.ordersFormated = [];
  }

  public async getAll(): Promise<IOrderDB[] | []> {
    const [resultProducts] = await this.connection
      .execute('SELECT id,orderId FROM Trybesmith.Products');
    const [resultOrders] = await this.connection.execute('SELECT * FROM Trybesmith.Orders');
    this.aggregationformData(resultOrders, resultProducts);
    return this.ordersFormated;
  }

  aggregationformData(table: [] | any, table2: [] | any) {
    const orders: IOrderDB[] = table.map((a: any) => ({
      id: a.id,
      userId: a.userId,
      productsIds: table2
        .filter((c: any) => a.id === c.orderId)
        .map((b: any) => b.id),
    }));
    this.ordersFormated = orders;
  }
}

export default OrdersModel;