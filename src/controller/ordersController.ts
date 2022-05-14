import { RequestHandler } from 'express';
import { IOrderService } from '../interfaces';

class OrdersController {
  orderService: IOrderService;

  constructor(dep: IOrderService) {
    this.orderService = dep;
  }

  public getAll: RequestHandler = async (_req, res, next) => {
    try {
      const orders = await this.orderService.getAll();
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  };
}

export default OrdersController;