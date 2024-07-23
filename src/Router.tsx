import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/index";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  )
}