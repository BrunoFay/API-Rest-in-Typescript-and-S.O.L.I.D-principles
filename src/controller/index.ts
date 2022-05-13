import { RequestHandler } from 'express';
import { IProductService } from '../interfaces';

class ProductsController {
  productService: IProductService;

  constructor(dep: IProductService) {
    this.productService = dep;
  }

  public getAll:RequestHandler = async (_req, res) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };
}

export default ProductsController;