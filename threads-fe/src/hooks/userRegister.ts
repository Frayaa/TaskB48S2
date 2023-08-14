import { IRegister } from "@/interfaces/user"
import { API } from "@/lib/api"
import { useToast } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const useRegister = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const [form, setForm] = useState<IRegister>({
    full_name: "",
    username: "",
    email: "",
    password: "",
  })

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await API.post("/auth/register", form)
      console.log(response.data.data)
      toast({
        title: "Register Berhasil",
        status: "success",
      })
      navigate("/login")
    } catch (err) {
      console.log(err)
      toast({
        title: "Register Gagal",
        status: "error",
      })
    }
  }

  return { changeHandler, handleRegister }
}
