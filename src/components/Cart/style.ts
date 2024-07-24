import styled from "styled-components";
import { CartProps, COLOR_OPTIONS } from "./types";

export const CartNumberContainer = styled.div`
  display: flex;
`;

export const CartContainer = styled.button<CartProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;

  background-color: ${props => props.theme[COLOR_OPTIONS[props.color]]};
  color: ${props => props.color === "purple" ? props.theme.white : props.theme["yellow-dark"]};
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme["yellow-dark"]};
  color: ${props => props.theme.white};
  border-radius: 9999999999px;

  margin-left: -0.625rem;
  margin-top: -0.425rem;

  span {
    font-size: 0.75rem;
    font-weight: bold;
  }
`;