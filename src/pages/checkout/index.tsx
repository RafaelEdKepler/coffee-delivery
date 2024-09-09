import { CurrencyDollarSimple, MapPinLine } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { AddressContainer, AddressPaymentContainer, Cart, CartContainer, CheckoutContainer, ConfirmButton, PaymentButtonsContainer, PaymentContainer, PaymentTitleContainer, TitleAddressContainer, ValuesContainer } from "./style";
import { Form } from "./components/Form";
import { Button } from "./components/Button";
import { ProductCart } from "./components/ProductCart";
import useCart from "../../hooks/useCart";
import { useEffect, useState } from "react";
import { returnPriceFormatted } from "../../utils/returnPriceFormatted";
import { FormType, useFormHook } from "../../hooks/useForm";

export function Checkout() {
  const [totalValueProducts, setTotalValueProducts] = useState(0);
  const [paymentMethodSelected, setPaymentMethodSelected] = useState("")
  const { state, getTotalValueOfCart } = useCart();
  const { validateFields } = useFormHook();
  const coffees = state.products;

  useEffect(() => {
    setTotalValueProducts(getTotalValueOfCart());
  }, [getTotalValueOfCart])

  function submitValues(data: FormType) {
    // validateFields(data)
  }

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
              <Button image="credit" size="medium" title="CARTÃO DE CRÉDITO" setPaymentMethodSelected={setPaymentMethodSelected} selected={paymentMethodSelected === "CARTÃO DE CRÉDITO"} />
              <Button image="bank" size="medium" title="CARTÃO DE DÉBITO" setPaymentMethodSelected={setPaymentMethodSelected} selected={paymentMethodSelected === "CARTÃO DE DÉBITO"} />
              <Button image="money" size="medium" title="DINHEIRO" setPaymentMethodSelected={setPaymentMethodSelected} selected={paymentMethodSelected === "DINHEIRO"} />
            </PaymentButtonsContainer>
          </PaymentContainer>
        </AddressPaymentContainer>
        <CartContainer>
          <h2>Cafés selecionados</h2>
          <Cart>
            <div>
              {coffees && coffees.length > 0 && (
                coffees.map((coffee) => (
                  <ProductCart {...coffee} />
                ))
              )}
            </div>
            <ValuesContainer>
              <div>
                <span>Total de Itens:</span>
                <span>{returnPriceFormatted(totalValueProducts, true)}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 10,00</span>
              </div>
              <div>
                <h3>Total</h3>
                <h3>{returnPriceFormatted(totalValueProducts + 10, true)}</h3>
              </div>
            </ValuesContainer>
            <ConfirmButton>
              <span>Confirmar Pedido</span>
            </ConfirmButton>
          </Cart>
        </CartContainer>
      </CheckoutContainer>
    </>
  )
}