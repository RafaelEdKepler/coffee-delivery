import { Selector } from "../../../../components/Selector";
import { Button } from "../Button";

import { ProductCartContainer, ProductInfoContainer, QuantityProductContainer, UnityValueContainer } from "./style";
import useCart, { productsProps } from "../../../../hooks/useCart";
import { useEffect, useState } from "react";
import { returnPriceFormatted } from "../../../../utils/returnPriceFormatted";

export function ProductCart({
    id,
    img,
    name,
}: productsProps) {

    const { getTotalValueOfProductInCart } = useCart();
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        setTotalValue(getTotalValueOfProductInCart(id));
    }, [getTotalValueOfProductInCart, id])

    return (
        <>
            <ProductCartContainer>
                <img src={img} />
                <ProductInfoContainer>
                    <span>{name}</span>
                    <QuantityProductContainer>
                        <Selector id={id} />
                        <Button image="trash" size="small" title="REMOVER" />
                    </QuantityProductContainer>
                </ProductInfoContainer>
                <UnityValueContainer>
                    <span>{returnPriceFormatted(totalValue, true)}</span>
                </UnityValueContainer>
            </ProductCartContainer>
            <hr />
        </>
    )
}