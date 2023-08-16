import { useParams } from "react-router-dom"
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { API } from "@/lib/api"
import { IThreadCard } from "@/interfaces/thread"
import { ThreadCard } from "."
import { IReplyPost } from "@/interfaces/reply"
import SideBar from "@/features/sidebar/SideBar"
import ProfilePage from "@/features/profilPage/Profile"
import UseReply from "@/hooks/useReply"

const ThreadDetail = () => {
  const { id } = useParams<{ id: any }>()
  const [idThreads, setIdThreads] = useState<IThreadCard[] | null>(null)
  const [threadDetail, setThreadDetail] = useState<IThreadCard | null>(null)
  const [replies, setReplies] = useState<IThreadCard[]>()
  // const [previewImage, setPreviewImage] = useState<string>("")
  const {changeHandler, handleSubmit} = UseReply()

  console.log(replies, "ini repliesbeneran")

  const getThreadById = async () => {
    const response = await API.get(`/thread/${id}`)
    console.log(response.data, "P")
    setThreadDetail(response.data)
    setIdThreads(id)
  }

  const getReplies = async () => {
    try {
      const response = await API.get(`/replies?thread_id=${id}`)
      setReplies(response.data)
      console.log(response.data, "ini repliesnya")
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getThreadById()
    getReplies()
  }, [id])

  if (idThreads === undefined) {
    return <Text>Thread ID not provided</Text>
  }

  // const threads = threadDetail.find((thread) => thread.id === Number(idThreads))

  return (
    <Box >
      {threadDetail ? (
        <Grid templateColumns="repeat(2, 1fr)">
          <SideBar />
          <VStack borderRight={"1px"}>
            <ThreadCard
              // key={index}
              id={threadDetail.id}
              user={threadDetail.user}
              content={threadDetail.content}
              posted_at={threadDetail.posted_at}
              likes_count={threadDetail.likes_count}
              replies_count={threadDetail.replies_count}
              image={threadDetail.image}
              is_liked={threadDetail.is_liked}
            />
             <form>
              <FormControl marginLeft="10em">
                <Input
                  width="30vh"
                  // w={"2xl"}
                  name="content"
                  type="content"
                  onChange={changeHandler}
                  placeholder="Type Your Replies"
                />
              </FormControl>
              
              {/* <Center> */}
                <Button
                marginLeft="8em"
                  type={"submit"}
                  bgColor="#3dad5b"
                  color={"white"}
                  mt="5"
                  w={"20%"}
                  borderRadius="20px"
                  onClick={handleSubmit}
                  fontSize="15px" > Send
                </Button>
              {/* </Center> */}
            </form>

<Box display="flex" flexDirection="column" gap={5}>
  {replies?.map((reply) => {
    return (
      // <Box border="1px solid #ccc" borderRadius="8px" padding="10px">
      <Flex >
        <Image src={reply.user?.profile_picture ? reply.user?.profile_picture : "/user-placeholder.png"}
        w="50px"
        h="50px"
        objectFit="cover"
        borderRadius="50%"
        marginRight="20px"
        >


        </Image>
        <Text marginTop="3" > {reply.content}</Text>
      </Flex>
      // </Box>
    )
  })}
</Box>
            {/* <Box bg="blue" alignItems="center"  >
              {replies?.map((reply, index) => (
                <Text key={index}> {reply.content}</Text>
              ))}
            </Box> */}

          </VStack>
          <ProfilePage />
        </Grid>
      ) : (
        <Alert
          status="error"
          variant="subtle"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          alignSelf="center"
          h="200px"
          w="100%"

        >
          <AlertIcon boxSize="20px" mr="0" />
          <AlertTitle>Thread Not Found</AlertTitle>
          <AlertDescription>
            The thread you're looking for does not exist.
          </AlertDescription>
        </Alert>
      )}
    </Box>
    // <Container marginLeft="46vh" width="500vh" position="relative">
    //   <Flex marginTop="20px">
    //     <Image
    //       // boxSize="50px"
    //       height="60px"
    //       borderRadius="50%"
    //       width="60px"
    //       objectFit="cover"
    //       marginTop="25px"
    //       src={threadDetail.user?.profile_picture}
    //     />
    //     <Grid marginLeft="20px" marginTop="20px">
    //       <Flex>
    //         <Text fontWeight="bold">{threadDetail.user?.full_name}</Text>
    //         <Text marginLeft="10px">@{threadDetail.user?.username}</Text>
    //         <Text marginLeft="10px">{threadDetail.posted_at}</Text>
    //       </Flex>
    //       <Text noOfLines={[1, 2, 3]}>{threadDetail.content}</Text>

    //       <Image
    //         src={threadDetail.image}
    //         width="300px"
    //         height="400px"
    //         marginTop="15px"
    //       />

    //       <Flex>
    //         <Image
    //           // boxSize="50px"
    //           height="50px"
    //           borderRadius="50"
    //           width="50px"
    //           objectFit="cover"
    //           marginTop="25px"
    //           src={threadDetail.user?.profile_picture}
    //         />

    //         <Box marginTop="10" marginLeft="5">
    //           <Text fontWeight="600">Type to reply...</Text>
    //         </Box>
    //         <Box>
    //           {replies}
    //         </Box>
    //         <HStack>
    //           <BiSolidImageAdd
    //             style={{ fontSize: "30px", marginTop: "32", marginLeft: "160" }}
    //           />
    //           <Button marginTop="8">Reply</Button>
    //         </HStack>
    //       </Flex>

    //       <Box style={{ marginTop: "20px" }}>
    //         <Button
    //           style={{
    //             backgroundColor: threadDetail.is_liked ? "red" : "#fcfcfc",
    //           }}
    //         >
    //           <FcLikePlaceholder />
    //           <Text textAlign="justify">{threadDetail.likes_count}</Text>
    //         </Button>
    //         <Button width="150px" marginLeft="10px" backgroundColor="#fcfcfc">
    //           <BiMessageDots />
    //           <Text marginLeft="5px">{threadDetail.replies_count} Replies</Text>
    //         </Button>
    //       </Box>
    //     </Grid>
    //   </Flex>
    // </Container>
  )
}

export default ThreadDetail
