import { INewOrder, IOrder, IOrderModel } from '../interfaces';

class OrdersService {
  protected model: IOrderModel;
  private userId: number
  constructor(dep: IOrderModel) {
    this.model = dep;
    this.userId = 0
  }

  async getAll() {
    const orders = await this.model.getAll();
    return orders;
  }

  async create({ productsId: arrayProducts }: INewOrder) {
    const checkIfUserexist =
    arrayProducts.map(async (prod: number) => {
      await this.model.create({ userId: this.userId, productsId: prod })
    });
    return { userId: this.userId, productsId: arrayProducts };
  }

}

export default OrdersService;