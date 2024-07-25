import { MapPinLine } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { AddressContainer, AddressPaymentContainer, CheckoutContainer, InputAddress, InputAddressContainer, InputsAddressContainer, TitleAddressContainer } from "./style";

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
            <InputsAddressContainer>
              <InputAddressContainer>
                <InputAddress type="text" placeholder="CEP" width={12.5} />
              </InputAddressContainer>
              <InputAddressContainer>
                <InputAddress type="text" placeholder="Rua" width={35} />
              </InputAddressContainer>
              <InputAddressContainer>
                <InputAddress type="text" placeholder="Número" width={12.5} />
                <InputAddress type="text" placeholder="Complemento" width={21.75} />
                <span>Opcional</span>
              </InputAddressContainer>
              <InputAddressContainer>
                <InputAddress type="text" placeholder="Bairro" width={12.5} />
                <InputAddress type="text" placeholder="Cidade" width={17.25} />
                <InputAddress type="text" placeholder="UF" width={3.75} />
              </InputAddressContainer>
            </InputsAddressContainer>
          </AddressContainer>
          <div>

          </div>
        </AddressPaymentContainer>
        <div>

        </div>
      </CheckoutContainer>
    </>
  )
}