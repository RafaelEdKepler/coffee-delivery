import styled from "styled-components";
import { CartProps, COLOR_OPTIONS } from "./types";

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