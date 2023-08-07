import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          {/* <Route element={<About />} path="/about/:id"></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
