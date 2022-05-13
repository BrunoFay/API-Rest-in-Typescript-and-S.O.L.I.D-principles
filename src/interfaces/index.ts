export interface IBookDB {
  id: number,
  name: string,
  amount: string,
  orderId?: number,
}
export interface IProductModel {
  getAll: () => Promise<IBookDB[] | []>
}
export type IProductService = IProductModel;