import { useToast } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"

import { useNavigate } from "react-router-dom"
import { ILogin } from "@/interfaces/user"
import { API, setAuthToken } from "@/lib/api"
import { useDispatch } from "react-redux"
import { AUTH_LOGIN } from "@/stores/rootReducer"
import { useSelector } from "react-redux"
import { RootState } from "@/stores/types/rootState"

const useLogin = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.auth)

  const [form, setForm] = useState<ILogin>({
    email: "",
    password: "",
  })

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await API.post("/auth/login", form)
      console.log(response.data, "APANi")
      // localStorage.setItem("token", response.data.token)
      dispatch(AUTH_LOGIN(response.data))
      setAuthToken(localStorage.token)

      toast({
        title: "Login success",
        status: "success",
      })
      navigate("/")
    } catch (err) {
      console.log(err)
      toast({
        title: "Email/Password is wrong",
        status: "error",
      })
    }
  }
  return { changeHandler, handleLogin }
}

export default useLogin
