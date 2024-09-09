import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/index";
import { Checkout } from "./pages/checkout";
import Success from "./pages/success";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/success' element={<Success />} />
    </Routes>
  )
}