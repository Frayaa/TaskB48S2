import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Detail from "./pages/detail"
import NotFound from "./pages/404page/404"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NotFound />} path="/404"></Route>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Detail />} path="/thread/:id"></Route>
          <Route element={<Login />} path="/login"></Route>
          {/* <Route element={<Register />} path="/register"></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
