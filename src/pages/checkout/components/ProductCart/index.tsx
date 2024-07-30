import { Selector } from "../../../../components/Selector";
import { Button } from "../Button";

import Image from "../../../../assets/Type=Americano.png";
import { ProductCartContainer, ProductInfoContainer, QuantityProductContainer, UnityValueContainer } from "./style";

export function ProductCart() {
    return (
        <ProductCartContainer>
            <img src={Image}/>
            <ProductInfoContainer>
                <span>Expresso Tradicional</span>
                <QuantityProductContainer>
                    <Selector id={1}/>
                    <Button image="trash" size="small" title="REMOVER"/>
                </QuantityProductContainer>
            </ProductInfoContainer>
            <UnityValueContainer>
                <span>R$ 9,90</span>
            </UnityValueContainer>
        </ProductCartContainer>
    )
}