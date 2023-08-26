import { IFollow } from "@/interfaces/follow"
import { API } from "@/lib/api"
import { SET_FOLLOW } from "@/stores/rootReducer"
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux"

const FollowCard = (props: IFollow) => {
  const dispatch = useDispatch()

  const handleFollow = async (
    id: number,
    follwedUserId: Number,
    isFollowed: boolean
  ) => {
    try {
      if (!isFollowed) {
        await API.post(`/follow`, {
          followed_user_id: follwedUserId,
        })
        dispatch(SET_FOLLOW({ id: id, isFollowed: isFollowed }))
      } else {
        await API.delete(`/follow/${follwedUserId}`)
        dispatch(SET_FOLLOW({ id: id, isFollowed: isFollowed }))
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Flex mb="5">
        <Image
          src={props.profile_picture ?? "/user-placeholder.png"}
          w="60px"
          h="60px"
          objectFit="cover"
          borderRadius="50%"
          mr="20px"
        ></Image>
        <Flex gap="4">
          <Box  gap="2">
            {/* <Flex> */}
              <Text>{props.full_name}</Text>
            {/* </Flex> */}
            <Text>@{props.username}</Text>
          </Box>
          <Flex justifyContent="flex-end">
            <Button color="white"
            bg="#3dad5b"
              onClick={() =>
                handleFollow(props.id, props.user_id, props.is_followed)
              }
            >
              {props.is_followed ? "Unfollow" : "Follow"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default FollowCard
