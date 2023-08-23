import { IThreadCard } from "@/interfaces/thread"
import { API } from "@/lib/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const UseThreadDetail = () => {
    const { id } = useParams<{ id: any }>()
    const [idThreads, setIdThreads] = useState<IThreadCard[] | null>(null)
    const [threadDetail, setThreadDetail] = useState<IThreadCard | null>(null)
  
    const getThreadById = async () => {
      const response = await API.get(`/thread/${id}`)
      console.log(response.data, "P")
      setThreadDetail(response.data)
      setIdThreads(id)
    }
  
   
  
    useEffect(() => {
      getThreadById()
    }, [id])
    return {getThreadById, threadDetail}
}

export default UseThreadDetail