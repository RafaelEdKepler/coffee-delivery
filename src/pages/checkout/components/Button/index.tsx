import { ButtonContainer } from "./style";
import { Bank, CreditCard, Money, Trash } from "@phosphor-icons/react";

interface ButtonProps {
    image: string,
    title: string,
    size: "small" | "medium",
    setPaymentMethodSelected?: (button: string) => void,
    selected?: boolean;
}

export function Button({ image, title, size, setPaymentMethodSelected, selected = false }: ButtonProps) {

    function handleClickButton() {
        setPaymentMethodSelected && setPaymentMethodSelected(title);
    }

    function handleShowIcon() {
        if (image === "credit") {
            return (<CreditCard size={16} />)
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