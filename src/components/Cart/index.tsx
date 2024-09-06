import { ShoppingCart } from "@phosphor-icons/react";
import { CartContainer, CartNumberContainer, NumberContainer } from "./style";
import { CartProps } from "./types";
import useCart from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

export function Cart({ color }: CartProps) {

  const navigate = useNavigate();
  const { calculateQuantityProductsInCart } = useCart();

  const quantityOfProducts = calculateQuantityProductsInCart();

  return (
    <CartNumberContainer onClick={() => navigate("/checkout")}>
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