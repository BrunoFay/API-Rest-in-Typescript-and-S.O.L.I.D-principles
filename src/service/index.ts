import { INewProduct, IProductModel } from '../interfaces';

class ProductsService {
  protected model: IProductModel;

  constructor(dep: IProductModel) {
    this.model = dep;
  }

  async getAll() {
    const products = await this.model.getAll();
    return products;
  }

  async create(product:INewProduct) {
    const products = await this.model.create(product);
    return products;
  }
}

export default ProductsService;