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
  getUserBylogin: (u: ILoginUser) => Promise<IUserDB[] | []>

}
export interface IUserService {
  checkIfUserexist: (u: ILoginUser) => Promise<IUserDB | void>
  create: (u: INewUser) => Promise<string>;
  createToken: (u: INewUser) => Promise<void>;

}

export interface IOrderDB {
  id: number,
  userId: number,
  productsIds: number[]
}
export interface IOrder {
  userId: number,
  productsIds: number[]
}
export interface INewOrder {
  productsId: number[],
  user: string
}
export interface INewOrderToModel {
  userId: number,
  productsIds: number
}
export interface IOrderModel {
  getAll: () => Promise<IOrderDB[]>
  create: (o: INewOrderToModel) => Promise<void>
}

export interface INewOrderToService {
  userId: number,
  productsIds: number[]
}
export interface IOrderService {
  getAll: () => Promise<IOrderDB[]>
  create: (o: INewOrderToService) => Promise<IOrder>
}

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