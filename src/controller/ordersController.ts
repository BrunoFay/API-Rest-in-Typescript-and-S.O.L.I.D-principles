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
      console.log(req.body);

      const newOrder = await this.orderService.create(req.body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  };
}

export default OrdersController;