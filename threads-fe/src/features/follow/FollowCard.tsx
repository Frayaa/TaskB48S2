import useFollow from "@/hooks/useFollow"
import { IFollow } from "@/interfaces/follow"
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { useState } from "react"

const FollowCard = (props: IFollow) => {
  const { handleFollow } = useFollow()
  const [isFollowed, setIsFollowed] = useState(props.is_followed)

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
          <Box gap="2">
            {/* <Flex> */}
            <Text>{props.full_name}</Text>
            {/* </Flex> */}
            <Text>@{props.username}</Text>
          </Box>
          <Flex justifyContent="flex-end">
            <Button
              color="white"
              bg="#3dad5b"
              onClick={() => {
                handleFollow(props.id, props.user_id, props.is_followed)
                setIsFollowed(!isFollowed)
              }}
            >
              {isFollowed ? "Unfollow" : "Follow"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default FollowCard
