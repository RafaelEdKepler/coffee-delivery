import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
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
`;