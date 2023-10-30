import { IUser } from "@/interfaces/thread"
import { API } from "@/lib/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const useUser = () => {
  const [user, setUser] = useState<IUser[]>([])
  const { id } = useParams()

  const getUser = async () => {
    try {
      const response = await API.get("/users")
      setUser(response.data)
      console.log("setuser", response.data)
    } catch (err) {
      console.log(err)
    }
  }
  const getUserRandom = async () => {
    try {
      const response = await API.get("/user/random")
      setUser(response.data)
      console.log("setuser", response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getUserId = async () => {
    try {
      const response = await API.get(`/user/${id}`)
      console.log(response.data.data)
      setUser(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return { getUser, getUserId, user, setUser, getUserRandom }
}

export default useUser
