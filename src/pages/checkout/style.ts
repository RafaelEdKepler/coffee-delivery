import styled from "styled-components";

interface InputProps {
  width: number
}

export const CheckoutContainer = styled.div`
  display: flex;
  margin: 2.5rem 10rem;
`;

export const AddressPaymentContainer = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const AddressContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 23.25rem;
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px;

  padding: 2.586rem 2.715rem;

`;

export const TitleAddressContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme["yellow-dark"]};
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme["base-subtitle"]};
  }

  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${props => props.theme["base-text"]};
  }
`;

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