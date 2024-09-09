import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { AllContainer, Data, DataContainer, DataSideContainer, IconCircle, ImageContainer, SuccessContainer, TitleContainer } from "./style";
import Image from "../../assets/Illustration.svg";

export default function Success() {

  return (
    <>
      <Header />
      <SuccessContainer>
        <DataSideContainer>
          <TitleContainer>
            <h2>Uhu! Pedido confirmado</h2>
          </TitleContainer>
          <TitleContainer>
            <span>Agora é só aguardar que logo o café chegará até você</span>
          </TitleContainer>
          <AllContainer>

            <DataContainer>
              <Data>
                <IconCircle color="purple">
                  <MapPin size={32} weight="fill" />
                </IconCircle>
                <div>
                  <span>Entrega em <b>Rua João Daniel Martinelli, 102</b></span>
                  <span>Farrapos - Porto Alegre, RS</span>
                </div>
              </Data>
              <Data>
                <IconCircle color="yellow">
                  <Timer size={32} weight="fill" />
                </IconCircle>
                <div>
                  <span>Previsão de entrega</span>
                  <span><b>20 min - 30 min</b></span>
                </div>
              </Data>
              <Data>
                <IconCircle color="yellow-dark">
                  <CurrencyDollar size={32} />
                </IconCircle>
                <div>
                  <span>Pagamento na entrega</span>
                  <span><b>Cartão de Crédito</b></span>
                </div>
              </Data>
            </DataContainer>
            <ImageContainer>
              <img src={Image} />
            </ImageContainer>
          </AllContainer>
        </DataSideContainer>
      </SuccessContainer>
    </>
  )
}