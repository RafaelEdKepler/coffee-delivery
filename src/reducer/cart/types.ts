export interface actionProps {
  type: string,
  payload: any
}

export enum PaymentMethods {
  CREDIT = "Cartão de Crédito",
  DEBIT = "Cartão de Débito",
  MONEY = "Dinheiro"
}

export enum ActionTypes {
  ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
  REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
  DECREASE_PRODUCT_QUANTITY_FROM_CART = "DECREASE_PRODUCT_QUANTITY_FROM_CART",
  INCREASE_PRODUCT_QUANTITY_FROM_CART = "INCREASE_PRODUCT_QUANTITY_FROM_CART",
  ADD_NEW_ORDER = "ADD_NEW_ORDER",
  GET_ORDER = "GET_ORDER"
}

export interface orderProps {
  address: {
    cep: string,
    street: string,
    number: string,
    complement: string,
    neighborhood: string,
    city: string,
    uf: string
  },
  payment: PaymentMethods
}

export interface stateProps {
  products: productsProps[],
  order?: orderProps
}

export interface productsProps {
  id: number,
  name: string,
  price: number,
  quantity: number,
  img: string
}