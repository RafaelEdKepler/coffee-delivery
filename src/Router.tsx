import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/index";
import { Checkout } from "./pages/checkout";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  )
}