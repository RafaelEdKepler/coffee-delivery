import { ShoppingCart } from "@phosphor-icons/react";
import { CartContainer, CartNumberContainer, NumberContainer } from "./style";
import { CartProps } from "./types";
import useCart from "../../hooks/useCart";

export function Cart({ color }: CartProps) {

  const { calculateQuantityProductsInCart } = useCart();

  const quantityOfProducts = calculateQuantityProductsInCart();

  return (
    <CartNumberContainer>
      <CartContainer color={color}>
        <ShoppingCart weight="fill" size={22} />
      </CartContainer>
      {color === "yellow" && (
        <NumberContainer quantity={quantityOfProducts}>
          <span>{quantityOfProducts}</span>
        </NumberContainer>
      )}
    </CartNumberContainer>
  )
}