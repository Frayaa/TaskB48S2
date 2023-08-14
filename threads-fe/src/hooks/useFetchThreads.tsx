import { IThreadCard, IThreadPost } from "@/interfaces/thread"
import { API } from "@/lib/api"
import {
  useToast,
} from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

const  useFetchThreads = () => {

  const toast = useToast()
  const [thread, setThread] = useState<IThreadCard[]>([])
  const [form, setForm] = useState<IThreadPost>({
    content: "",
    image: "",
  })

  const fetchData = async () => {
    try {
      const response = await API.get("/threads")
      console.log("ini data", response.data.data)
      setThread(response.data)
    } catch (err) {
      console.log(err, "error fetching")
    }
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await API.post("/thread", {
        content: form.content,
        image: form.image,
      })
      console.log(response.data, "ini post")
      setForm({
        content: "",
        image: "",
      })
      toast({
        title: "Thread Telah ditambahkan",
        status: "success",
      })

      fetchData()
      // setIsModalOpen(false)
      console.log(fetchData, "ini baru")
    } catch (err) {
      console.log(err)
      toast({
        title: "Thread Gagal ditambahkan",
        status: "error",
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
   {fetchData, changeHandler, handleSubmit, thread, form}
  )
}

export default useFetchThreads
