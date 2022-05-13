import { IProductModel } from '../interfaces';

class ProductsService {
  protected model: IProductModel;

  constructor(dep: IProductModel) {
    this.model = dep;
  }

  async getAll() {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductsService;