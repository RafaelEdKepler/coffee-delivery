import { createContext, ReactNode, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/cart/reducer";
import { addNewItemOnCart, removeItemFromCart } from "../reducer/cart/actions";

interface useCartProps {
  addProduct: () => void
  removeProduct: () => void
  state: {
    products: productsProps[]
  }
}

export interface productsProps {
  id: number,
  name: string,
  price: number,
  quantity: number
}

interface useCartContextProviderProps {
  children: ReactNode
}

const UseCartContext = createContext({} as useCartProps);

export const UseCartProvider = ({ children }: useCartContextProviderProps) => {

  const [state, dispatch] = useReducer((CartReducer), { products: [], }, (initialState) => (initialState));

  function addProduct() {
    const newProducts = {
      id: 1,
      name: "teste",
      price: 9.99,
      quantity: 2
    }
    dispatch(addNewItemOnCart(newProducts))
  }

  function removeProduct() {
    dispatch(removeItemFromCart(1));
  }

  return (
    <UseCartContext.Provider value={{
      state,
      addProduct,
      removeProduct
    }}>
      {children}
    </UseCartContext.Provider>
  )
}

export default function useCart() {
  return useContext(UseCartContext);
}