import { API } from "@/lib/api"
import { GET_FOLLOWS, SET_FOLLOW } from "@/stores/rootReducer"
import { RootState } from "@/stores/types/rootState"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const useFollow = () => {
  const dispatch = useDispatch()
  const follow = useSelector((state: RootState) => state.follow.followState)

  const handleFollow = async (
    id: number,
    followedUserId: Number,
    isFollowed: boolean
  ) => {
    try {
      if (!isFollowed) {
        await API.post(`/follow`, {
          followed_user_id: followedUserId,
        })
        console.log("Followed user", followedUserId)
        dispatch(SET_FOLLOW({ id: id, isFollowed: true }))
      } else {
        await API.delete(`/follow/${followedUserId}`)
        console.log("Unfollowed user", followedUserId)
        dispatch(SET_FOLLOW({ id: id, isFollowed: false }))
        // const response = await API.get(`/follows?type${follow}`)
        // dispatch(GET_FOLLOWS(response.data))
      }
    } catch (err) {
      console.log(err)
    }
  }

  return {
    handleFollow,
  }
}

export default useFollow
