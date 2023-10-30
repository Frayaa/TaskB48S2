import useFollow from "@/hooks/useFollow"
import useThreadCard from "@/hooks/useThreadCard"
import useUser from "@/hooks/useUser"
import { IThreadCard } from "@/interfaces/thread"
import { RootState } from "@/stores/types/rootState"
import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  VStack,
  HStack,
  Card,
  Grid,
  CircularProgress,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BiMessageDots } from "react-icons/bi"
import { FcLikePlaceholder } from "react-icons/fc"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"
export default function ProfileDetail(props: IThreadCard) {
  const { user, getUser, getUserId } = useUser()
  const threads = useSelector((state: RootState) => state.thread.threads)
  const auth = useSelector((state: RootState) => state.auth)
  const [isloading, setIsLoading] = useState<boolean>(true)
  const navigate = useNavigate()

  const [isLiked, setIsLiked] = useState(props.is_liked)

  const { handleLike } = useThreadCard()

  useEffect(() => {
    if (props.is_liked !== isLiked) {
      setIsLiked(props.is_liked)
    }
  }, [props.is_liked])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    getUser()
    getUserId()
  }, [useFollow])

  return (
    <>
      {isloading ? (
        <Box textAlign={"center"} justifyContent="center" alignItems="center">
          <CircularProgress color="purple" isIndeterminate />
        </Box>
      ) : (
        <VStack marginTop="30px" position="relative" ml="20" mt="10">
          {user && (
            <Card
              w="80vh"
              backgroundColor="#505250"
              padding="5"
              borderRadius="10"
            >
              <Heading
                fontSize={"2xl"}
                fontWeight={500}
                fontFamily={"body"}
                marginBottom="2"
              >
                My profile
              </Heading>
              <Image
                h={"120px"}
                w={"full"}
                borderRadius="8px"
                src={
                  "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
                objectFit="cover"
                alt="#"
              />

              <Flex justifyContent="space-between" mt={-12}>
                <Avatar
                  size={"xl"}
                  src={user?.profile_picture}
                  css={{
                    border: "2px solid white",
                  }}
                />
                {auth.data.id === user?.id && (
                  <Link to="/profile">
                    <Button
                      marginTop="50px"
                      borderRadius="20px"
                      height="35px"
                      backgroundColor="#787d7a"
                    >
                      Edit Profile
                    </Button>
                  </Link>
                )}
              </Flex>

              <Box p={6}>
                <Stack spacing={0} mb={5}>
                  <Heading
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
                    {user?.full_name}
                  </Heading>
                  <Text color={"gray.500"}>{user?.username}</Text>
                  <Text color={"gray.500"}>{user?.email}</Text>
                </Stack>

                <HStack alignItems="start">
                  <Text fontWeight={600}>23k</Text>
                  <Text fontSize={"md"} color={"gray.500"}>
                    Followers
                  </Text>
                  <Text fontWeight={600}>23k</Text>
                  <Text fontSize={"md"} color={"gray.500"}>
                    Followers
                  </Text>
                </HStack>
              </Box>
            </Card>
          )}
          {threads
            .filter((thread) => thread.user?.id === user.id)
            .map((thread) => (
              <Card
                w="80vh"
                backgroundColor="#505250"
                padding="5"
                borderRadius="10"
              >
                <Flex marginTop="20px">
                  <Image
                    height="60px"
                    borderRadius="50%"
                    width="60px"
                    objectFit="cover"
                    marginTop="25px"
                    src={thread.user?.profile_picture}
                  />
                  <Grid marginLeft="20px" marginTop="20px">
                    <Box
                      cursor={"pointer"}
                      onClick={() => navigate(`/thread/${thread.id}`)}
                    >
                      <Flex justifyContent="space-between">
                        <Box>
                          <Text fontWeight="bold">
                            {thread.user?.full_name}
                          </Text>
                          <Text>@{thread.user?.username}</Text>
                        </Box>
                        <Text ml="auto">
                          {thread.posted_at
                            ? formatDistanceToNow(new Date(thread.posted_at)) +
                              " ago"
                            : "No date available"}
                        </Text>
                      </Flex>
                      <Text noOfLines={[1, 2, 3]}>{thread.content}</Text>

                      <Image
                        src={thread.image}
                        width="60vh"
                        height="50vh"
                        marginTop="15px"
                      />
                    </Box>

                    <Box style={{ marginTop: "20px" }}>
                      <Button
                        bg={isLiked ? "red" : "grey"}
                        // onClick={() => handleLike}
                        onClick={() => handleLike(thread.id, thread.is_liked)}
                        _hover={{ bg: isLiked ? "red" : "gray" }}
                      >
                        <FcLikePlaceholder />
                        <Text textAlign="justify">{thread.likes_count}</Text>
                      </Button>
                      <Button width="150px" marginLeft="10px">
                        <BiMessageDots />
                        <Text marginLeft="5px">
                          {thread.replies_count} Replies
                        </Text>
                      </Button>
                    </Box>
                  </Grid>
                </Flex>
              </Card>
            ))}
        </VStack>
      )}
    </>
  )
}
