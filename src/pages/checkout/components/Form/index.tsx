import { useFormHook } from "../../../../hooks/useForm";
import { InputAddress, InputAddressContainer, InputsAddressContainer } from "./style";

export function Form() {

  const { registerForm, validateFields } = useFormHook();

  return (
    <InputsAddressContainer>
      <InputAddressContainer>
        <InputAddress type="text" placeholder="CEP" width={12.5} {...registerForm('cep', {
          required: true,
          onBlur(event) {
            validateFields("cep", event.target.value);
          },
        })} />
      </InputAddressContainer>
      <InputAddressContainer>
        <InputAddress type="text" placeholder="Rua" width={35} {...registerForm('street', { required: true })} />
      </InputAddressContainer>
      <InputAddressContainer>
        <InputAddress type="text" placeholder="Número" width={12.5} {...registerForm('number', { required: true })} />
        <InputAddress type="text" placeholder="Complemento" width={21.75} {...registerForm('complement', { required: false })} />
        <span>Opcional</span>
      </InputAddressContainer>
      <InputAddressContainer>
        <InputAddress type="text" placeholder="Bairro" width={12.5} {...registerForm('neighborhood', { required: true })} />
        <InputAddress type="text" placeholder="Cidade" width={17.25} {...registerForm('city', { required: true })} />
        <InputAddress type="text" placeholder="UF" width={3.75} {...registerForm('uf', { required: true })} />
      </InputAddressContainer>
    </InputsAddressContainer>
  )
}