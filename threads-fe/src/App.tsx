import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Detail from "./pages/detail"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Detail/>} path="/thread/:id"></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
