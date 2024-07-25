import { productsProps } from "../hooks/useCart";
import Tradicional from "../assets/Image.png";
import Americano from "../assets/Type=Americano.png";
import Gelado from "../assets/Type=Café Gelado.png";
import Leite from "../assets/Type=Café com Leite.png";
import Cappuccino from "../assets/Type=Capuccino.png";
import Chocolate from "../assets/Type=Chocolate Quente.png";
import Cubano from "../assets/Type=Cubano.png";
import Cremoso from "../assets/Type=Expresso Cremoso.png";
import Havaiano from "../assets/Type=Havaiano.png";
import Irlandes from "../assets/Type=Irlandês.png";
import Latte from "../assets/Type=Latte.png";
import Macchiato from "../assets/Type=Macchiato.png";
import Arabe from "../assets/Type=Árabe.png";
import Mochaccino from "../assets/Type=Mochaccino.png";

export interface productProps {
  id: number,
  name: string,
  price: number,
  img: string
  label: Array<string>
  description: string
}

export const productsList: productProps[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    price: 9.90,
    img: Tradicional,
    label: ["tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos"
  },
  {
    id: 2,
    name: "Expresso Americano",
    price: 9.90,
    img: Americano,
    label: ["tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional"
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    price: 9.90,
    img: Cremoso,
    label: ["tradicional"],
    description: "Café expresso tradicional com espuma cremosa"
  },
  {
    id: 4,
    name: "Expresso Gelado",
    price: 9.90,
    img: Gelado,
    label: ["tradicional", "gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo"
  },
  {
    id: 5,
    name: "Café com Leite",
    price: 9.90,
    img: Leite,
    label: ["tradicional", "com leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado"
  },
  {
    id: 6,
    name: "Latte",
    price: 9.90,
    img: Latte,
    label: ["tradicional", "com leite"],
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa"
  },
  {
    id: 7,
    name: "Cappuccino",
    price: 9.90,
    img: Cappuccino,
    label: ["tradicional", "com leite"],
    description: "Bebida com canela feita de doses iguais de café, leite e espuma"
  },
  {
    id: 8,
    name: "Macchiato",
    price: 9.90,
    img: Macchiato,
    label: ["tradicional", "com leite"],
    description: "Café expresso misturado com um pouco de leite quente e espuma"
  },
  {
    id: 9,
    name: "Mocaccino",
    price: 9.90,
    img: Mochaccino,
    label: ["tradicional", "com leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma"
  },
  {
    id: 10,
    name: "Chocolate Quente",
    price: 9.90,
    img: Chocolate,
    label: ["especial", "com leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café"
  },
  {
    id: 11,
    name: "Cubano",
    price: 9.90,
    img: Cubano,
    label: ["especial", "alcoólico", "gelado"],
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã"
  },
  {
    id: 12,
    name: "Havaiano",
    price: 9.90,
    img: Havaiano,
    label: ["especial"],
    description: "Bebida adocicada preparada com café e leite de coco"
  },
  {
    id: 13,
    name: "Árabe",
    price: 9.90,
    img: Arabe,
    label: ["especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias"
  },
  {
    id: 14,
    name: "Irlandes",
    price: 9.90,
    img: Irlandes,
    label: ["especial", "alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly"
  },
]