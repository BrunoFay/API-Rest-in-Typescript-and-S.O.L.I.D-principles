import { INewOrderToService, IOrderModel } from '../interfaces';

class OrdersService {
  protected model: IOrderModel;

  private userId: number;

  constructor(dep: IOrderModel) {
    this.model = dep;
    this.userId = 0;
  }

  async getAll() {
    const orders = await this.model.getAll();
    return orders;
  }

  async create({ userId, productsIds: arrayProducts }: INewOrderToService) {
    this.userId = userId;
    arrayProducts.map(async (prod: number) => {
      await this.model.create({ userId: this.userId, productsIds: prod });
    });
    return { userId: this.userId, productsIds: arrayProducts };
  }
}

export default OrdersService;