export function returnPriceFormatted(value: number, preFix?: boolean): string {
  return value ? `${preFix ? 'R$' : ""} ${value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2
  })}` : `${preFix ? 'R$' : ""} 0,00`
}