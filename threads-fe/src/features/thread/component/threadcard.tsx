import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react"
import { FcLikePlaceholder } from "react-icons/fc"
import { BiMessageDots } from "react-icons/bi"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { API } from "@/lib/api"
import { IThreadCard } from "@/interfaces/thread"
import UseThreadCard from "@/hooks/useThreadCard"
// import SideBar from "@/features/sidebar/SideBar"

export const ThreadCard = (props: IThreadCard) => {
  // console.log(props, "Prpop")
  const navigate = useNavigate()

  const [isLiked, setIsLiked] = useState(props.is_liked)
  // const [likeCount, setLikeCount] = useState(props.likes_count || 0)

  // const handleLikeClick = () => {
  //   if (isLiked) {
  //     setLikeCount(likeCount - 1)
  //   } else {
  //     setLikeCount(likeCount + 1)
  //   }
  //   setIsLiked(!isLiked)
  // }

  const { handleLike } = UseThreadCard()

  useEffect(() => {
    setIsLiked(props.is_liked)
  }, [props.is_liked])

  return (
    <>
      <Container width="500vh" position="relative" marginBottom="10">
        <Flex marginTop="20px">
          <Image
            height="60px"
            borderRadius="50%"
            width="60px"
            objectFit="cover"
            marginTop="25px"
            src={props.user?.profile_picture}
          />
          <Grid marginLeft="20px" marginTop="20px">
            <Box
              cursor={"pointer"}
              onClick={() => navigate(`/thread/${props.id}`)}
            >
              <Flex>
                <Text fontWeight="bold">{props.user?.full_name}</Text>
                <Text marginLeft="10px">@{props.user?.username}</Text>
                <Text marginLeft="10px">{props.posted_at}</Text>
              </Flex>
              <Text noOfLines={[1, 2, 3]}>{props.content}</Text>

              <Image
                src={props.image}
                width="60vh"
                height="70vh"
                marginTop="15px"
              />
            </Box>

            <Box style={{ marginTop: "20px" }}>
              <Button
                bg={isLiked ? "red" : "grey"}
                // onClick={() => handleLike}
                onClick={() => handleLike(props.id, props.is_liked)}
                _hover={{ bg: isLiked ? "red" : "gray" }}
              >
                <FcLikePlaceholder />
                <Text textAlign="justify">{props.likes_count}</Text>
              </Button>
              <Button width="150px" marginLeft="10px">
                <BiMessageDots />
                <Text marginLeft="5px">{props.replies_count} Replies</Text>
              </Button>
            </Box>
          </Grid>
        </Flex>
      </Container>
    </>
  )
}
