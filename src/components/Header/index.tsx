import { MapPin } from "@phosphor-icons/react";
import Logo from "../../assets/Logo.svg";
import { HeaderContainer, LocationCartContainer, LocationContainer } from "./styles";
import { Cart } from "../Cart";
import { useNavigate } from "react-router-dom";

export function Header() {

  const navigate = useNavigate()

  return (
    <HeaderContainer onClick={() => navigate("/")}>
      <div>
        <img src={Logo} />
      </div>
      <LocationCartContainer>
        <LocationContainer>
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <Cart color="yellow" />
      </LocationCartContainer>
    </HeaderContainer>
  )
}