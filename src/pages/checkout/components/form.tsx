import { InputAddress, InputAddressContainer, InputsAddressContainer } from "./style";

export function Form() {
  return (
    <InputsAddressContainer>
      <InputAddressContainer>
        <InputAddress type="text" placeholder="CEP" width={12.5} />
      </InputAddressContainer>
      <InputAddressContainer>
        <InputAddress type="text" placeholder="Rua" width={35} />
      </InputAddressContainer>
      <InputAddressContainer>
        <InputAddress type="text" placeholder="Número" width={12.5} />
        <InputAddress type="text" placeholder="Complemento" width={21.75} />
        <span>Opcional</span>
      </InputAddressContainer>
      <InputAddressContainer>
        <InputAddress type="text" placeholder="Bairro" width={12.5} />
        <InputAddress type="text" placeholder="Cidade" width={17.25} />
        <InputAddress type="text" placeholder="UF" width={3.75} />
      </InputAddressContainer>
    </InputsAddressContainer>
  )
}