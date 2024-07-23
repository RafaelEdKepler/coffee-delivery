import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import Logo from "../../assets/Logo.svg";
import { CartContainer, HeaderContainer, LocationCartContainer, LocationContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} />
      </div>
      <LocationCartContainer>
        <LocationContainer>
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <CartContainer>
          <ShoppingCart weight="fill" size={22} />
        </CartContainer>
      </LocationCartContainer>
    </HeaderContainer>
  )
}