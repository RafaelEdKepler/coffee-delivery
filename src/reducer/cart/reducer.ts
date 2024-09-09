import { produce } from "immer";
import { actionProps, ActionTypes, stateProps } from "./types";

export function CartReducer(state: stateProps, action: actionProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      return produce(state, draft => {
        draft.products.push(action.payload.product)
      })
    }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      return produce(state, (draft) => {
        const positionProductRemoved = draft.products.findIndex(product => {
          return product.id === action.payload.id
        });
        if (positionProductRemoved >= 0) {
          draft.products.splice(positionProductRemoved, 1);
        }
        return draft;
      })
    }
    case ActionTypes.DECREASE_PRODUCT_QUANTITY_FROM_CART: {
      return produce(state, draft => {
        draft.products.map(product => {
          if (product.id === action.payload.id) {
            product.quantity -= action.payload.quantity;
            if (product.quantity < 0) {
              product.quantity = 0;
            }
          }
          return product;
        })
      })
    }
    case ActionTypes.INCREASE_PRODUCT_QUANTITY_FROM_CART: {
      return produce(state, draft => {
        draft.products.map(product => {
          if (product.id === action.payload.id) {
            product.quantity += action.payload.quantity;
          }
          return product;
        })
      })
    }
    case ActionTypes.ADD_NEW_ORDER: {
      return produce(state, draft => {
        draft.order = action.payload
      })
    }
    default: {
      return state;
    }
  }
}