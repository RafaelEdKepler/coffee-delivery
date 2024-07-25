import useCart from "../../hooks/useCart";
import { SelectorContainer } from "./style";

interface SelectorProps {
  id: number
}

export function Selector({ id }: SelectorProps) {

  const { addProduct, removeProduct, decreaseQuantityInCart, increaseQuantityInCart, totalQuantityOfProductInCart } = useCart();

  const totalProduct = totalQuantityOfProductInCart(id);

  function handleIncreaseProduct() {
    if (totalProduct > 0) {
      increaseQuantityInCart(id);
    }
    if (totalProduct === 0) {
      addProduct(id);
    }
  }

  function handleDecreaseProduct() {
    if (totalProduct > 1) {
      decreaseQuantityInCart(id);
    }
    if (totalProduct <= 1) {
      removeProduct(id);
    }
  }

  return (
    <SelectorContainer>
      <button onClick={handleDecreaseProduct}>-</button>
      <span>{totalProduct}</span>
      <button onClick={handleIncreaseProduct}>+</button>
    </SelectorContainer>
  )
}