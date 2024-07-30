import { CreditCard, CurrencyDollarSimple, MapPinLine } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { AddressContainer, AddressPaymentContainer, Cart, CartContainer, CheckoutContainer, PaymentButtonsContainer, PaymentContainer, PaymentTitleContainer, TitleAddressContainer } from "./style";
import { Form } from "./components/Form";
import { Button } from "./components/Button";
import { ProductCart } from "./components/ProductCart";

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
            <PaymentButtonsContainer>
              <Button image="credit" size="medium" title="CARTÃO DE CRÉDITO"/>
              <Button image="bank" size="medium" title="CARTÃO DE DÉBITO"/>
              <Button image="money" size="medium" title="DINHEIRO"/>
            </PaymentButtonsContainer>
          </PaymentContainer>
        </AddressPaymentContainer>
        <CartContainer>
          <h2>Cafés selecionados</h2>
          <Cart>
            <div>
              <ProductCart/>
              <ProductCart/>
            </div>
            <div>
              <span>valores</span>
              <span>valores</span>
              <span>valores</span>
            </div>
            <button>Confirmar Pedido</button>
          </Cart>
        </CartContainer>
      </CheckoutContainer>
    </>
  )
}