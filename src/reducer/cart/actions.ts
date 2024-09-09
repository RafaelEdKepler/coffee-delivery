import { ActionTypes, orderProps, productsProps } from "./types";

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

export function createNewOrder(props: orderProps) {
  return {
    type: ActionTypes.ADD_NEW_ORDER,
    payload: { ...props }
  }
}

export function getOrder() {
  return {
    type: ActionTypes.GET_ORDER,
  }
}