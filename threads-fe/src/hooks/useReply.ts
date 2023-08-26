import { IReplyPost } from "@/interfaces/reply"
import { IThreadCard } from "@/interfaces/thread"
import { API } from "@/lib/api"
import { useToast } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const useReply = () => {
  const toast = useToast()
  const { id } = useParams()

  const [replies, setReplies] = useState<IThreadCard[]>([])

  const [form, setForm] = useState<IReplyPost>({
    content: "",
    thread_id: +(id as string),
  })

  const getReplies = async () => {
    try {
      const response = await API.get(`/replies?thread_id=${id}`)
      setReplies(response.data)
      console.log(response.data, "ini repliesnya")
    } catch (err) {
      console.log(err)
    }
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setForm({
      content: "",
      thread_id: 0,
    })

    try {
      const response = await API.post("/reply", form)
      console.log(response, "ini reply baru")
      // setReplies([...replies, response.data])
      toast({
        title: "Add Reply",
        status: "success",
      })

      getReplies()
    } catch (err) {
      console.log(err)
      toast({
        title: "Failed to Reply",
        status: "error",
      })
    }
  }

  useEffect(() => {
    getReplies()
  }, [])
  return { changeHandler, handleSubmit, getReplies, replies }
}

export default useReply
