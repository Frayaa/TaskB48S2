import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import { useEffect, useState } from "react"
import { API, setAuthToken } from "./lib/api"
import { useDispatch } from "react-redux"
import { AUTH_CHECK, AUTH_ERROR } from "./stores/rootReducer"
import Login from "./pages/Login"
import { RootState } from "./stores/types/rootState"
import { useSelector } from "react-redux"
import ThreadDetail from "./pages/ThreadDetail"
import { Box, CircularProgress } from "@chakra-ui/react"
import Follows from "./pages/Follows"

export default function App() {
  const [isloading, setIsLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.auth)

  const authCheck = async () => {
    try {
      setAuthToken(localStorage.token)
      const response = await API.get("/auth/check")
      console.log("ini auth token", response)
      dispatch(AUTH_CHECK(response.data.user))
      setIsLoading(false)
    } catch (err) {
      console.log(err, "auth error")
      dispatch(AUTH_ERROR())
      setIsLoading(false)
      navigate("/login")
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      authCheck()
    } else {
      setIsLoading(false)
    }
  }, [])

  const IsLogin = () => {
    if (!auth.data.email) {
      return <Navigate to={"/login"} />
    } else {
      return <Outlet />
    }
  }

  const IsNotLogin = () => {
    if (auth.data.email) {
      return <Navigate to={"/"} />
    } else {
      return <Outlet />
    }
  }

  return (
    <>
      {isloading ? (
        <Box textAlign={"center"} justifyContent="center" alignItems="center">
          <CircularProgress color="purple" isIndeterminate />
        </Box>
      ) : (
        <Routes>
          <Route element={<IsLogin />}>
            <Route element={<Home />} path="/"></Route>
            <Route element={<ThreadDetail />} path="/thread/:id"></Route>
            <Route element={<Follows />} path="/follows"></Route>
          </Route>
          <Route element={<IsNotLogin />}>
            <Route element={<Register />} path="/register"></Route>
            <Route element={<Login />} path="/login"></Route>
          </Route>
        </Routes>
      )}
    </>
  )
}
