import { CurrencyDollarSimple, MapPinLine } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { AddressContainer, AddressPaymentContainer, CheckoutContainer, PaymentContainer, PaymentTitleContainer, TitleAddressContainer } from "./style";
import { Form } from "./components/form";

export function Checkout() {
  return (
    <>
      <Header />
      <CheckoutContainer>
        <AddressPaymentContainer>
          <h2>Complete seu pedido</h2>
          <AddressContainer>
            <TitleAddressContainer>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </TitleAddressContainer>
            <Form />
          </AddressContainer>
          <PaymentContainer>
            <PaymentTitleContainer>
              <CurrencyDollarSimple size={22} />
              <div>
                <h3>Pagamento</h3>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </PaymentTitleContainer>
          </PaymentContainer>
        </AddressPaymentContainer>
        <div>

        </div>
      </CheckoutContainer>
    </>
  )
}