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

  public create: RequestHandler = async (req, res, next) => {
    try {
      const { user: userId, productsIds } = req.body;
      const newOrder = await this.orderService.create({ userId, productsIds });
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  };
}

export default OrdersController;