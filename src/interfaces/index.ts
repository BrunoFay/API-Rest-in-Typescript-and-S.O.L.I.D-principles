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
  createToken: (u: INewUser) => Promise<void>;
}

export interface IOrderDB {
  id: number,
  userId: number,
  productsIds: number[]
}
export interface IOrderModel {
  getAll: () => Promise<IOrderDB[]>
}
export type IOrderService = IOrderModel;

export interface ILoginUser {
  username: string,
  password: string
}

export interface ILoginModel {
  login: (u: ILoginUser) => Promise<IUserDB[] | null>
}
export interface ILoginService {
  login: (u: ILoginUser) => Promise<string | boolean>;
  createToken: (u: ILoginUser) => Promise<void>;
} 