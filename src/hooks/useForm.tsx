import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ZodSchema = zod.object({
  cep: zod.string().min(8).max(8),
  street: zod.string(),
  neighborhood: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  uf: zod.string().min(2).max(2),
  city: zod.string()
})

export type FormType = zod.infer<typeof ZodSchema>

export function useFormHook() {
  const addressForm = useForm<FormType>({
    resolver: zodResolver(ZodSchema)
  });
  const { register, control, setError, formState } = addressForm;

  function validateFields(type: string, value: string) {
    let successParsed;
    switch (type) {
      case 'cep': {
        successParsed = ZodSchema.safeParse({
          cep: value
        })
        break;
      }
      case 'street': {
        successParsed = ZodSchema.safeParse({
          street: value
        })
        break;
      }
      case 'neighborhood': {
        successParsed = ZodSchema.safeParse({
          neighborhood: value
        })
        break;
      }
      case 'number': {
        successParsed = ZodSchema.safeParse({
          number: value
        })
        break;
      }
      case 'uf': {
        successParsed = ZodSchema.safeParse({
          uf: value
        })
        break;
      }
      default: {
        return true
      }
    }
    if (!successParsed.success) {
      setError(type, {
        message: "Valor incorreto!"
      })
      console.log(formState, successParsed)
    }
  }

  return {
    addressForm,
    validateFields,
    registerForm: register,
    control,
    setError
  }
}