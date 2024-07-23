import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Header } from "../../components/Header";

import MainImage from "../../assets/Main.png";
import { MainSectionContainer, MainSectionImageContainer, MainSectionInfoContainer, MainSectionInstructionsContainer, SingleInfoContainer } from "./styles";

export function Main() {
  return (
    <>
      <Header />
      <MainSectionContainer>
        <MainSectionInfoContainer>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
          <MainSectionInstructionsContainer>
            <SingleInfoContainer iconColor="yellowDark">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </SingleInfoContainer>
            <SingleInfoContainer iconColor="base">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </SingleInfoContainer>
            <SingleInfoContainer iconColor="yellow">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </SingleInfoContainer>
            <SingleInfoContainer iconColor="purple">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </SingleInfoContainer>
          </MainSectionInstructionsContainer>
        </MainSectionInfoContainer>
        <MainSectionImageContainer>
          <img src={MainImage} alt="Imagem de um copo de café com vários grãos de café atrás em um fundo amarelado meio arredondado" />
        </MainSectionImageContainer>
      </MainSectionContainer>
    </>
  )
}