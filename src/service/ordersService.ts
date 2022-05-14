import { IOrderModel } from '../interfaces';

class OrdersService {
  protected model: IOrderModel;

  constructor(dep: IOrderModel) {
    this.model = dep;
  }

  async getAll() {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default OrdersService;