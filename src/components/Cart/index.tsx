import { ShoppingCart } from "@phosphor-icons/react";
import { CartContainer } from "./style";
import { CartProps } from "./types";

export function Cart({ color }: CartProps) {
  return (
    <CartContainer color={color}>
      <ShoppingCart weight="fill" size={22} />
    </CartContainer>
  )
}