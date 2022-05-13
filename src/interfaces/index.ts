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

export interface IUserDB {
  id: number
  username: string,
  classe: string,
  level: number,
  password: string
}
export interface INewUser {
  username: string,
  classe: string,
  level: 1,
  password: string
}

export interface IUserModel {
  create: (u: INewUser) => Promise<void>
}
export interface IUserService {
  create: (u: INewUser) => Promise<string>;
  createToken:(u: INewUser) => Promise<string>;
} 
