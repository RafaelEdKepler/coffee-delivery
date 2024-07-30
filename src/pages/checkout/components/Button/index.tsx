import React, { useState } from "react";
import { ButtonContainer } from "./style";
import { Bank, CreditCard, Money, Trash } from "@phosphor-icons/react";

interface ButtonProps {
    image: string,
    title: string,
    size: "small" | "medium"
}

export function Button({image, title, size}: ButtonProps) {

    const [selected, setSelected] = useState(false);

    function handleClickButton() {
        size === "medium" && setSelected(!selected);
    }

    function handleShowIcon() {
        if (image === "credit") {
            return (<CreditCard size={16}/>)
        }
        if (image === "bank") {
            return (<Bank size={16} />)
        }
        if (image === "money") {
            return (<Money size={16} />)
        }
        if (image === "trash") {
            return (<Trash size={16} />)
        }
    }

    return (
        <ButtonContainer selected={selected} size={size} onClick={handleClickButton}>
            {handleShowIcon()}
            <span>{title}</span>
        </ButtonContainer>
    )
}