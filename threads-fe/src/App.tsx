import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom"
import Home from "./pages/home"
import Detail from "./pages/detail"
import Register from "./pages/Register"
import { useEffect, useState } from "react"
import { API, setAuthToken } from "./lib/api"
import { useDispatch } from "react-redux"
import { AUTH_CHECK } from "./stores/rootReducer"
import Login from "./pages/Login"
import { RootState } from "./stores/types/rootState"
import { useSelector } from "react-redux"

export default function App() {
  const [isloading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.auth)

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
      navigate("/login")
      console.log(err, "auth error")
    }
  }

  useEffect(() => {
    authCheck()
  }, [])

  // const IsLogin = () => {
  //   if(!auth.data.username) {
  //     return <Navigate to={"/login"}/>
  //   } else {
  //     return <Outlet/>
  //   }
  // }

  // const IsNotLogin = () => {
  //   if(auth.data.username) {
  //     return <Navigate to={"/"}/>
  //   } else {
  //     return <Outlet/>
  //   }
  // }

  return (
    <>
      {isloading ? null : (
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Detail />} path="/thread/:id"></Route>
          <Route element={<Register />} path="/register"></Route>
          <Route element={<Login />} path="/login"></Route>
          {/* <Route element={<Register />} path="/register"></Route> */}
        </Routes>
      )}
    </>
  )
}
