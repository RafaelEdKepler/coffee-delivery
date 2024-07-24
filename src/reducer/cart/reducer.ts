import { produce } from "immer";
import { productsProps } from "../../hooks/useCart";
import { actionProps } from "./types";
import { ActionTypes } from "./actions";

interface stateProps {
  products: productsProps[]
}

export function CartReducer(state: stateProps, action: actionProps) {
  if (action.type === ActionTypes.ADD_NEW_PRODUCT) {
    return produce(state, draft => {
      draft.products.push(action.payload.product)
    })
  }

  if (action.type === ActionTypes.REMOVE_PRODUCT_FROM_CART) {
    return produce(state, (draft) => {
      const positionProductRemoved = draft.products.findIndex(product => {
        return product.id === action.payload.id
      });
      if (positionProductRemoved >= 0) {
        draft.products.splice(positionProductRemoved, 1);
      }
      console.log(draft.products)
      return draft;
    })
  }

  return state;
}