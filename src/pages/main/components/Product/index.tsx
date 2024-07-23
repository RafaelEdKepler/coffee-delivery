import { Cart } from "../../../../components/Cart";
import { Selector } from "../../../../components/Selector";
import Coffee from "../../../../assets/Type=Irlandês.png";
import { DescriptionProductContainer, ImgContainer, LabelContainer, PriceCartContainer, PriceContainer, ProductContainer, TitleProductContainer } from "./style";

export function Product() {
  return (
    <ProductContainer>
      <ImgContainer>
        <img src={Coffee} />
      </ImgContainer>
      <LabelContainer>
        <span>TRADICIONAL</span>
        <span>TRADICIONAL</span>
      </LabelContainer>
      <TitleProductContainer>
        <h3>Expresso Tradicional</h3>
      </TitleProductContainer>
      <DescriptionProductContainer>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </DescriptionProductContainer>
      <PriceCartContainer>
        <PriceContainer>
          <span>R$</span>
          <h3>
            9,90
          </h3>
        </PriceContainer>
        <Selector />
        <Cart color="purple" />
      </PriceCartContainer>
    </ProductContainer>
  )
}