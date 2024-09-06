import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const AddressPaymentContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 75%;

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
  width: 100%;
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

export const PaymentContainer = styled(AddressContainer)`
  height: 12.938rem;
`;

export const PaymentTitleContainer = styled(TitleAddressContainer)`
  svg {
    color: ${props => props.theme.purple};
  }
`;

export const PaymentButtonsContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  gap: 0.75rem;
`;

export const CartContainer = styled(AddressPaymentContainer)`
  width: 28rem;
  gap: 15px;
  margin-left: 2rem;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;

  hr {
    border-top: ${props => props.theme["base-button"]};
    margin-bottom: 1.5rem;
  }
`;

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      color: ${props => props.theme["base-text"]};
      font-size: 0.875rem;
    }

    h3 {
      color: ${props => props.theme["base-subtitle"]};
      font-size: 1.25rem;
      font-weight: bold;
    }
  }

  div:not(first-child) {
    margin-top: 0.75rem;
  }
`;

export const ConfirmButton = styled.button`
  width: 23rem;
  height: 2.875rem;
  border-radius: 6px;
  background: ${props => props.theme.yellow};
  transition: 0.2s;
  border: none;

  span {
    color: ${props => props.theme.white};
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  &:hover {
    background: ${props => props.theme["yellow-dark"]};
  }
`