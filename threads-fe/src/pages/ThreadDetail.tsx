import { useParams } from "react-router-dom"
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react"
import { ThreadCard } from "../features/thread/component"
import SideBar from "@/features/sidebar/SideBar"
import ProfilePage from "@/features/profilPage/Profile"
import useReply from "@/hooks/useReply"
import UseThreadDetail from "@/hooks/useThreadDetail"

const ThreadDetail = () => {
  const { id } = useParams<{ id: any }>()
  const { changeHandler, handleSubmit, getReplies, replies } = useReply()
  const { getThreadById, threadDetail } = UseThreadDetail()

  return (
    <Box >
      {threadDetail ? (
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={3}>
            <SideBar />
          </GridItem>
          <GridItem colSpan={5} mt="8">
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

            <Box marginLeft="24">
              <form onSubmit={handleSubmit}>
                <HStack>
                  <Box mt="2">
                    <FormControl>
                      <Input
                        width="46vh"
                        name="content"
                        type="content"
                       
                        onChange={changeHandler}
                        placeholder="Type Your Replies"
                      />
                    </FormControl>
                  </Box>

                  <Button
                    // marginLeft="8em"
                    type={"submit"}
                    bgColor="#3dad5b"
                    color={"white"}
                    mt="2"
                    w={"20"}
                    borderRadius="20px"
                    fontSize="15px"
                  >
                    Reply
                  </Button>
                </HStack>
              </form>

              <Box display="flex" flexDirection="column" gap={5} mt="8">
                {replies?.map((reply) => {
                  return (
                    <Box
                      key={reply.user?.id}
                      // style={{
                      //   border: "0.5px solid black",
                      //   padding: "10px",
                      //   // borderRadius: "20",
                      // }}
                    >
                      <Flex alignItems="center">
                        <Image
                          src={
                            reply.user?.profile_picture
                              ? reply.user?.profile_picture
                              : "/user-placeholder.png"
                          }
                          w="50px"
                          h="50px"
                          objectFit="cover"
                          borderRadius="50%"
                          marginRight="20px"
                        ></Image>
                        {/* <VStack> */}

                        <HStack>
                          <Text fontWeight="bold" fontSize="18">
                            {reply.user?.full_name}
                          </Text>
                          <Text marginLeft="10px" fontSize="18">
                            @{reply.user?.username}
                          </Text>
                        </HStack>
                        {/* </VStack> */}
                      </Flex>
                      <Box marginBottom="3">
                        <Text marginTop="5"> {reply.content}</Text>
                      </Box>
                      <hr />
                    </Box>
                  )
                })}
              </Box>
            </Box>
            {/* </VStack> */}
          </GridItem>
          <GridItem colSpan={4} mt="2">
            <ProfilePage />
          </GridItem>
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
