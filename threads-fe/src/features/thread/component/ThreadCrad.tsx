import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { FcLikePlaceholder } from "react-icons/fc"
import { BiMessageDots } from "react-icons/bi"

interface ThreadCard {
  //mirip struct golang
  id: number
  author_picture?: string
  author_full_name?: string
  author_username?: string
  posted_at?: string
  content?: string
  likes_count: number
  replies_count?: number // bisa gini juga string | number
  image: string
  is_liked: boolean
}



export const ThreadCard = (props: ThreadCard) => {
  return (
    <>
      <Flex padding="40px">
        <Image
          src={props.author_picture}
          style={{
            width: "260px",
            height: "80px",
            marginTop: "15px",
            borderRadius: "50%",
          }}
        />
        <Box marginLeft="20px" marginTop="20px">
          <Flex>
            <Text fontWeight="bold">{props.author_full_name}</Text>
            <Text marginLeft="10px">@{props.author_username}</Text>
            <Text marginLeft="10px">{props.posted_at}</Text>
          </Flex>
          <Text noOfLines={[1, 2, 3]}>{props.content}</Text>
          
          <Image
            src={props.image}
            style={{ width: "300px", height: "400px", marginTop: "15px" }}
          />
          <Box style={{ marginTop: "20px" }}>
            <Button
              style={{ backgroundColor: props.is_liked ? "red" : "#fcfcfc" }}
            >
              <FcLikePlaceholder />
              <Text textAlign="justify">{props.likes_count}</Text>
            </Button>
            <Button width="150px" marginLeft="10px" backgroundColor="#fcfcfc">
              <BiMessageDots />
              <Text marginLeft="5px">{props.replies_count} Replies</Text>
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  )
}
