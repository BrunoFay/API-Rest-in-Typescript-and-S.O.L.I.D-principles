export interface IProductDB {
  id: number,
  name: string,
  amount: string,
  orderId?: number,
}
export interface INewProduct {
  name: string,
  amount: string,
  orderId?: number,
}

export interface IProductModel {
  getAll: () => Promise<IProductDB[] | []>,
  create: (p: INewProduct) => Promise<IProductDB>
}
export type IProductService = IProductModel;