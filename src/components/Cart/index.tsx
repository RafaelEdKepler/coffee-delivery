import { ShoppingCart } from "@phosphor-icons/react";
import { CartContainer, CartNumberContainer, NumberContainer } from "./style";
import { CartProps } from "./types";
import useCart from "../../hooks/useCart";

export function Cart({ color }: CartProps) {

  const { state } = useCart();

  return (
    <CartNumberContainer>
      <CartContainer color={color}>
        <ShoppingCart weight="fill" size={22} />
      </CartContainer>
      {state && state.products && state.products.length > 0 && color === "yellow" && (
        <NumberContainer>
          <span>{state.products ? state.products.length : 0}</span>
        </NumberContainer>
      )}
    </CartNumberContainer>
  )
}