import { productsProps } from "../../hooks/useCart";

export enum ActionTypes {
  ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
  REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
  DECREASE_PRODUCT_QUANTITY_FROM_CART = "DECREASE_PRODUCT_QUANTITY_FROM_CART",
  INCREASE_PRODUCT_QUANTITY_FROM_CART = "INCREASE_PRODUCT_QUANTITY_FROM_CART"
}

export function addNewItemOnCart(product: productsProps) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      product
    }
  }
}

export function removeItemFromCart(id: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      id
    }
  }
}

export function decreaseProductQuantityFromCart(id: number, quantity: number) {
  return {
    type: ActionTypes.DECREASE_PRODUCT_QUANTITY_FROM_CART,
    payload: {
      quantity,
      id
    }
  }
}

export function increaseProductQuantityFromCart(id: number, quantity: number) {
  return {
    type: ActionTypes.INCREASE_PRODUCT_QUANTITY_FROM_CART,
    payload: {
      quantity,
      id
    }
  }
}