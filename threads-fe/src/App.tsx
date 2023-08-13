import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/home"
import Detail from "./pages/detail"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { useEffect, useState } from "react"
import { API, setAuthToken } from "./lib/api"
import { useDispatch } from "react-redux"
import { AUTH_CHECK } from "./stores/rootReducer"

export default function App() {
  const [isloading, setIsLoading] = useState<boolean>(false)
  // const navigate = useNavigate()
  const dispatch = useDispatch()

  const authCheck = async () => {
    try {
      setIsLoading(true)
      setAuthToken(localStorage.token)
      const response = await API.get("/auth/check")
      console.log("ini auth token", response)
      dispatch(AUTH_CHECK(response.data.user))
      if (response) {
        setIsLoading(false)
      }
    } catch (err) {
      localStorage.removeItem("token")
      setIsLoading(false)
      // navigate("/login")
      console.log(err, "auth error")
    }
  }

  useEffect(() => {
    authCheck()
  }, [])

  

  return (
    <>
      <BrowserRouter>
        {isloading ? null : (
          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Detail />} path="/thread/:id"></Route>
            <Route element={<Register />} path="/register"></Route>
            <Route element={<Login />} path="/login"></Route>
            {/* <Route element={<Register />} path="/register"></Route> */}
          </Routes>
        )}
      </BrowserRouter>
    </>
  )
}
