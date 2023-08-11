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
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { API } from "@/lib/api"
// import SideBar from "@/features/sidebar/SideBar"

export interface IUser {
  id?: number
  username?: string
  full_name?: string
  email?: string
  profile_picture?: string
}

export interface IThreadCard {
  //mirip struct golang
  id: number
  // author_picture?: string
  // author_full_name?: string
  // author_username?: string
  user?: IUser
  posted_at?: string
  content?: string
  likes_count: number
  replies_count?: number // bisa gini juga string | number
  image: string
  is_liked: boolean
}

export const ThreadCard = (props: IThreadCard) => {
  const [isLiked, setIsLiked] = useState(props.is_liked)
  const [likeCount, setLikeCount] = useState(props.likes_count)
  const [thread, setThread] = useState()
  const { id } = useParams()

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setIsLiked(!isLiked)
  }

  const getThreadById = async () => {
    const response = await API.get(`/thread/${id}`)
    setThread(response.data)

    useEffect(() => {
      getThreadById()
    }, [])
  }
  return (
    <>
      {/* <Container > */}
      {/* <Flex> */}
      {/* <VStack>{SideBar()}</VStack> */}

      {/* <VStack> */}

      {/* <Heading>Home</Heading> 
     <Flex marginTop="5" bg="#f2f5f5" padding="2" borderRadius="15">
              <Image
                h="60px"
                borderRadius="full"
                width="60px"
                objectFit="cover"
                src={props.author_picture}
              />
              <Text padding="20px">

              What's Hapenning?
              </Text>
            </Flex>  */}
      <Container
        marginLeft="48vh"
        width="500vh"
        position="relative"
        marginBottom="10"
      >
        <Flex marginTop="20px">
          <Image
            // boxSize="50px"
            height="60px"
            borderRadius="50%"
            width="60px"
            objectFit="cover"
            marginTop="25px"
            // src={props.author_picture}
            src={props.user?.profile_picture}
          />
          <Grid marginLeft="20px" marginTop="20px">
            <Link to={`/thread/${id}`}>
              <Flex>
                <Text fontWeight="bold">{props.user?.full_name}</Text>
                <Text marginLeft="10px">@{props.user?.username}</Text>
                <Text marginLeft="10px">{props.posted_at}</Text>
              </Flex>
            </Link>
            <Text noOfLines={[1, 2, 3]}>{props.content}</Text>

            <Image
              src={props.image}
              width="60vh"
              height="70vh"
              marginTop="15px"
            />
            <Box style={{ marginTop: "20px" }}>
              <Button
                colorScheme={isLiked ? "red" : "grey"} // Menggunakan colorScheme Chakra UI
                onClick={handleLikeClick}
                _hover={{ bg: isLiked ? "red" : "gray" }}
              >
                <FcLikePlaceholder />
                <Text textAlign="justify">{likeCount}</Text>
              </Button>
              <Button width="150px" marginLeft="10px" backgroundColor="#fcfcfc">
                <BiMessageDots />
                <Text marginLeft="5px">{props.replies_count} Replies</Text>
              </Button>
            </Box>
          </Grid>
        </Flex>
      </Container>

      {/* </VStack> */}
      {/* </Flex> */}
      {/* </Container> */}
    </>
  )
}
