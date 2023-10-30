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
import { useSelector } from "react-redux"
import { RootState } from "@/stores/types/rootState"
import { formatDistanceToNow } from "date-fns"

// import SideBar from "@/features/sidebar/SideBar"

export const ThreadCard = (props: IThreadCard) => {
  // console.log(props, "Prpop")
  const navigate = useNavigate()
  const threads = useSelector((state: RootState) => state.thread.threads)

  const [isLiked, setIsLiked] = useState(props.is_liked)

  const { handleLike } = UseThreadCard()
  const formattedPostedAt =
    props.posted_at !== undefined
      ? formatDistanceToNow(new Date(props.posted_at), {
          addSuffix: true,
        })
      : "Unknown Date"

  useEffect(() => {
    if (props.is_liked !== isLiked) {
      setIsLiked(props.is_liked)
    }
  }, [props.is_liked])

  return (
    <>
      <Container
        position="relative"
        marginBottom="10"
        border="1px"
        pb="6"
        mt="4"
        borderColor="#4f5450"
        borderRadius="10"
        ml="8"
      >
        <Flex marginTop="20px">
          <Link to={`/me/${props.user?.id}`}>
            <Image
              height="60px"
              borderRadius="50%"
              width="60px"
              objectFit="cover"
              marginTop="25px"
              src={props.user?.profile_picture}
            />
          </Link>
          <Grid marginLeft="20px" marginTop="20px">
            <Box
              cursor={"pointer"}
              onClick={() => navigate(`/thread/${props.user?.id}`)}
            >
              <Flex justifyContent="space-between">
                <Box>
                  <Text fontWeight="bold">{props.user?.full_name}</Text>
                  <Text>@{props.user?.username}</Text>
                </Box>
                <Text ml="auto">{formattedPostedAt}</Text>
              </Flex>
              <Text noOfLines={[1, 2, 3]}>{props.content}</Text>

              <Image
                src={props.image}
                width="60vh"
                height="50vh"
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
