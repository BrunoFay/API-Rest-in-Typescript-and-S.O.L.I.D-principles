import { RequestHandler } from 'express';
import { IProductService } from '../interfaces';

class ProductsController {
  productService: IProductService;

  constructor(dep: IProductService) {
    this.productService = dep;
  }

  public getAll: RequestHandler = async (_req, res, next) => {
    try {
      const products = await this.productService.getAll();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  };

  public create: RequestHandler = async (req, res, next) => {
    try {
      const { name, amount } = req.body;
      const newProduct = await this.productService.create({ name, amount });
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  };
}

export default ProductsController;