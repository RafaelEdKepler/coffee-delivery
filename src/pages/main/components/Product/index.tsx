import { Cart } from "../../../../components/Cart";
import { Selector } from "../../../../components/Selector";
import { DescriptionProductContainer, ImgContainer, LabelContainer, PriceCartContainer, PriceContainer, ProductContainer, TitleProductContainer } from "./style";
import { productProps } from "../../../../utils/products";
import { returnPriceFormatted } from "../../../../utils/returnPriceFormatted";

export function Product({ id, img, label, name, price, description }: productProps) {
  return (
    <ProductContainer>
      <ImgContainer>
        <img src={img} />
      </ImgContainer>
      <LabelContainer>
        {label.length > 0 && (
          label.map(text => (
            <span>{text.toUpperCase()}</span>
          ))
        )}
      </LabelContainer>
      <TitleProductContainer>
        <h3>{name}</h3>
      </TitleProductContainer>
      <DescriptionProductContainer>
        <span>{description}</span>
      </DescriptionProductContainer>
      <PriceCartContainer>
        <PriceContainer>
          <span>R$</span>
          <h3>
            {returnPriceFormatted(price)}
          </h3>
        </PriceContainer>
        <Selector id={id} />
        <Cart color="purple" />
      </PriceCartContainer>
    </ProductContainer>
  )
}