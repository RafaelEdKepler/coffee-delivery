import styled from "styled-components";
import { SelectorProps } from "./types";

export const SelectorContainer = styled.div<SelectorProps>`
  width: 4.5rem;
  height: 2.375rem;

  border-radius: 6px;
  background-color: ${props => props.theme["base-button"]};

  margin: 0 0.5rem 0 1.438rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button:first-child {
    padding-left: 9.53px;
  }

  button:last-child {
    padding-right: 12px;
  }

  span, button {
    font-size: 1rem;
    font-weight: bold;
  }

  button {
    color: ${props => props.theme.purple};
    background: none;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }
`