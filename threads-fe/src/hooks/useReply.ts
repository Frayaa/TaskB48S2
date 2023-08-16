import { IReplyPost } from "@/interfaces/reply"
import { API } from "@/lib/api"
import { useToast } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const UseReply = () => {
    const toast = useToast()
  
    const [form, setForm] = useState<IReplyPost>({
      content: ""
    })
  
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      })
    }
  
    const handleSubmit = async (event: FormEvent) => {
      event.preventDefault()
      try {
        const response = await API.post("/reply", form)
        console.log(response, "APANi")
        setForm({
            content: "",
       
          })
        toast({
          title: "Add Reply",
          status: "success",
        })
      } catch (err) {
        console.log(err)
        toast({
          title: "Failed to Reply",
          status: "error",
        })
      }
    }
    return { changeHandler, handleSubmit }
}

export default UseReply