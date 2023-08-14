import { useParams } from "react-router-dom"
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react"
import { FcLikePlaceholder } from "react-icons/fc"
import { BiMessageDots, BiSolidImageAdd } from "react-icons/bi"
import { useEffect, useState } from "react"
import { API } from "@/lib/api"
import { IThreadCard } from "@/interfaces/thread"

const ThreadDetail = () => {
  const { id } = useParams<{id: any}>()
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


  // const threadId = id;
  if (idThreads === undefined) {
    return <Text>Thread ID not provided</Text>
  }

  // const threads = threadDetail.find((thread) => thread.id === Number(idThreads))

  if (!threadDetail) {
    return <Text>Thread Not Found</Text>
  }

  return (
    <Container marginLeft="46vh" width="500vh" position="relative">
      <Flex marginTop="20px">
        <Image
          // boxSize="50px"
          height="60px"
          borderRadius="50%"
          width="60px"
          objectFit="cover"
          marginTop="25px"
          src={threadDetail.user?.profile_picture}
        />
        <Grid marginLeft="20px" marginTop="20px">
          <Flex>
            <Text fontWeight="bold">{threadDetail.user?.full_name}</Text>
            <Text marginLeft="10px">@{threadDetail.user?.username}</Text>
            <Text marginLeft="10px">{threadDetail.posted_at}</Text>
          </Flex>
          <Text noOfLines={[1, 2, 3]}>{threadDetail.content}</Text>

          <Image
            src={threadDetail.image}
            width="300px"
            height="400px"
            marginTop="15px"
          />

          <Flex>
            <Image
              // boxSize="50px"
              height="50px"
              borderRadius="50"
              width="50px"
              objectFit="cover"
              marginTop="25px"
              src={threadDetail.user?.profile_picture}
            />

            <Box marginTop="10" marginLeft="5">
              <Text fontWeight="600">Type to reply...</Text>
            </Box>
            <HStack>
              <BiSolidImageAdd
                style={{ fontSize: "30px", marginTop: "32", marginLeft: "160" }}
              />
              <Button marginTop="8">Reply</Button>
            </HStack>
          </Flex>

          <Box style={{ marginTop: "20px" }}>
            <Button
              style={{
                backgroundColor: threadDetail.is_liked ? "red" : "#fcfcfc",
              }}
            >
              <FcLikePlaceholder />
              <Text textAlign="justify">{threadDetail.likes_count}</Text>
            </Button>
            <Button width="150px" marginLeft="10px" backgroundColor="#fcfcfc">
              <BiMessageDots />
              <Text marginLeft="5px">{threadDetail.replies_count} Replies</Text>
            </Button>
          </Box>
        </Grid>
      </Flex>
    </Container>
  )
}

export default ThreadDetail
