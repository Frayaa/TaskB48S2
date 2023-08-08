import { useParams } from "react-router-dom"
import threads from "@/utils/fakedata/threads.json"
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

const ThreadDetail = () => {
  const { id } = useParams()
  console.log("id", id)

  // const threadId = id;
  if (id === undefined) {
    return <Text>Thread ID not provided</Text>
  }

  const threadDetail = threads.find((thread) => thread.id === parseInt(id, 10))

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
          width="500px"
          objectFit="cover"
          marginTop="25px"
          src={threadDetail.author_picture}
        />
        <Grid marginLeft="20px" marginTop="20px">
          <Flex>
            <Text fontWeight="bold">{threadDetail.author_full_name}</Text>
            <Text marginLeft="10px">@{threadDetail.author_username}</Text>
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
              src={threadDetail.author_picture}
            />

            <Box marginTop="10" marginLeft="5">
              <Text fontWeight="600">Type to reply...</Text>
            </Box>
            <HStack>

            <BiSolidImageAdd style={{ fontSize: "30px", marginTop: "32", marginLeft:"160"}}/>
            <Button marginTop="8" >
              Reply
            </Button>
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
