import {  IThreadPost } from "@/interfaces/thread"
import { API } from "@/lib/api"
import { GET_THREADS } from "@/stores/rootReducer"
import { RootState } from "@/stores/types/rootState"
import {
  useToast,
} from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const useFetchThreads = () => {
  // const [thread] = useState(threads)
  const inputFileRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()
  const toast = useToast()
  const [form, setForm] = useState<IThreadPost>({
    content: "",
    image: "",
  })
  const [previewImage, setPreviewImage] = useState<string>("")
  const threads = useSelector((state: RootState) => state.thread.threads)
  const [page, setPage] = useState(1)

  const fetchData = async () => {
    try {
      const response = await API.get(`/threads`, {
        params: {
          _page: page
        }
      })
      console.log("ini data", response.data)
      // setThread(response.data)
      dispatch(GET_THREADS(response.data))
      // console.log(GET_THREADS(response.data), "get thread")
    } catch (err) {
      console.log(err, "error fetching")
    }
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target

    if (files) {
      console.log("ini file image", files[0])
      const image = URL.createObjectURL(files[0])
      setPreviewImage(image)
      setForm({
        ...form,
        [name]: files[0],
      })
    } else {
      setForm({
        ...form,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("content", form.content)
    formData.append("image", form.image as File)
    try {
      const response = await API.post("/thread", formData)
      console.log(response.data, "ini post")
      setForm({
        content: "",
        image: "",
      })
      setPreviewImage("")
      toast({
        title: "Thread Telah ditambahkan",
        status: "success",
      })

      fetchData()
      console.log(fetchData, "ini baru")
    } catch (err) {
      console.log(err)
      toast({
        title: "Thread Gagal ditambahkan",
        status: "error",
      })
    }
  }

  // const seeMoreBtnHandler = () => {
  //   setPage(page + 1)
  // }
  useEffect(() => {
    fetchData()
  }, [])


  return {
    changeHandler,
    handleSubmit,
    form,
    previewImage,
    fetchData,
    inputFileRef,
    threads,
    // seeMoreBtnHandler,
  }
}

export default useFetchThreads
