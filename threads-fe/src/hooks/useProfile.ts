import {  IProfile } from "@/interfaces/user"
import { API } from "@/lib/api"
import { AUTH_CHECK } from "@/stores/rootReducer"
import { useToast } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

export const useProfile = () => {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const toast = useToast()
  const { id } = useParams()
  console.log("ini id", id)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [previewImage, setPreviewImage] = useState<string>("")
  const [form, setForm] = useState<IProfile>({
    full_name: "",
    username: "",
    description: "",
    profile_picture: "",
  })

 

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target
    console.log("cahnge", form)

    if (files) {
      console.log("ini profile_picture", files[0])
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

  const submitProfile = async (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("full_name", form.full_name)
    formData.append("username", form.username)
    formData.append("description", form.description)

    formData.append("profile_picture", form.profile_picture as File)
    console.log("desc", form.description)
    try {
      const response = await API.patch(`/profile`, formData)
      console.log(response.data.data)
      dispatch(AUTH_CHECK(response.data))
      toast({
        title: "Edit Profile Berhasil",
        status: "success",
      })
      navigate("/")
    } catch (err) {
      console.log(err)
      toast({
        title: "Edit profile Gagal",
        status: "error",
      })
    }
  }

  const handleCancel = () => {
    navigate("/")
  }

  return {
    changeHandler,
    submitProfile,
    inputFileRef,
    handleCancel,
    previewImage,
    form,
  }
}
