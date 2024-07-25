import { createContext, ReactNode, useCallback, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/cart/reducer";
import { addNewItemOnCart, decreaseProductQuantityFromCart, increaseProductQuantityFromCart, removeItemFromCart } from "../reducer/cart/actions";
import { productProps, productsList } from "../utils/products";

interface useCartProps {
  addProduct: (id: number) => void
  removeProduct: (id: number) => void
  state: {
    products: productsProps[]
  }
  calculateQuantityProductsInCart: () => number
  increaseQuantityInCart: (id: number) => void
  decreaseQuantityInCart: (id: number) => void
  totalQuantityOfProductInCart: (id: number) => number
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

  function addProduct(id: number) {
    const product = productsList.find((product: productProps) => product.id === id);
    if (product) {
      dispatch(addNewItemOnCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      }))
    }
  }

  function removeProduct(id: number) {
    const product = productsList.find((product: productProps) => product.id === id);
    if (product) {
      dispatch(removeItemFromCart(product.id));
    }
  }

  function increaseQuantityInCart(id: number) {
    dispatch(increaseProductQuantityFromCart(id, 1));
  }

  function decreaseQuantityInCart(id: number) {
    dispatch(decreaseProductQuantityFromCart(id, 1));
  }

  function totalQuantityOfProductInCart(id: number) {
    let totalOfProduct = 0;
    state.products.forEach(product => {
      if (product.id === id) {
        totalOfProduct += product.quantity;
      }
    })
    return totalOfProduct;
  }

  const calculateQuantityProductsInCart = useCallback(() => {
    return state.products.reduce((total, product) => (total + product.quantity), 0)
  }, [state.products])

  return (
    <UseCartContext.Provider value={{
      state,
      addProduct,
      removeProduct,
      calculateQuantityProductsInCart,
      increaseQuantityInCart,
      decreaseQuantityInCart,
      totalQuantityOfProductInCart
    }}>
      {children}
    </UseCartContext.Provider>
  )
}

export default function useCart() {
  return useContext(UseCartContext);
}