import { API } from "@/lib/api"
import { LIKE_THREADS } from "@/stores/rootReducer"
import { RootState } from "@/stores/types/rootState"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import useFetchThreads from "./useFetchThreads"

const useThreadCard = () => {
  const dispatch = useDispatch()
  const threads = useSelector((state: RootState) => state.thread.threads)
  const { fetchData } = useFetchThreads()

  const handleLike = async (id: number, isLiked: boolean) => {
    try {
      if (!isLiked) {
        const response = await API.post("/like", { thread_id: id })
        dispatch(LIKE_THREADS({ id: id, isLiked: true }))
      } else {
        const response = await API.delete(`/like/${id}`)
        dispatch(LIKE_THREADS({ id: id, isLiked: false }))
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }

  return {
    threads,
    handleLike,
  }
}

export default useThreadCard
