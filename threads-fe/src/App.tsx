import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/home"
import Detail from "./pages/detail"
import NotFound from "./pages/404page/404"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { useEffect, useState } from "react"
import { API, setAuthToken } from "./lib/api"

export default function App() {
  // const [isloading, setIsLoading] = useState<boolean>(true)
  // const navigate = useNavigate()

  const authCheck = async () => {
    try {
      setAuthToken(localStorage.token)
      const response = await API.get("/auth/check")
      console.log("ini auth token", response)
      setIsLoading(false)
    } catch (err) {
      localStorage.removeItem("token")
      navigate("/login")
      console.log(err, "auth error")
    }
  }

  useEffect(() => {
    authCheck()
  }, [])

  return (
    <>
      <BrowserRouter>
        {/* {isloading ? null : ( */}
          <Routes>
            <Route element={<NotFound />} path="/404"></Route>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Detail />} path="/thread/:id"></Route>
            <Route element={<Register />} path="/register"></Route>
            <Route element={<Login />} path="/login"></Route>
            {/* <Route element={<Register />} path="/register"></Route> */}
          </Routes>
        {/* )} */}
      </BrowserRouter>
    </>
  )
}
