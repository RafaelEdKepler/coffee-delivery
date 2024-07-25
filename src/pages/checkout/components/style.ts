import styled from "styled-components";

interface InputProps {
  width: number
}

export const InputsAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const InputAddressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: 0.75rem;
    margin: -1rem 0 0 -5rem;
    color: ${props => props.theme["base-label"]};
    font-style: italic;
  }
`;

export const InputAddress = styled.input<InputProps>`
  height: 2.625rem;
  background-color: ${props => props.theme["base-input"]};
  border-color: ${props => props.theme["base-button"]};
  border-style: solid;
  margin-bottom: 1rem;
  width: ${props => props.width}rem;
  padding: 0.75rem;
  color: ${props => props.theme["base-label"]};
`;