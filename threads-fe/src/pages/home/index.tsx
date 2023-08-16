import ProfilePage from "@/features/profilPage/Profile"
import SideBar from "@/features/sidebar/SideBar"
import { ThreadCard } from "@/features/thread/component"
import UseFetchThreads from "@/hooks/useFetchThreads"
import {
  Container,
  VStack,
  Box,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BiSolidImageAdd } from "react-icons/bi"

export default function Home() {
  const {
    thread,
    form,
    previewImage,
    fetchData,
    changeHandler,
    handleSubmit,
    inputFileRef,
  } = UseFetchThreads()
  const navigate = useNavigate()
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Container marginLeft="-8">
        <Grid templateColumns="repeat(2, 1fr)">
          <SideBar />

          <VStack borderRight={"1px"}>
            <Box marginTop="5" padding="2" borderRadius="15" marginLeft="80">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <FormControl>
                  <FormLabel>content</FormLabel>
                  <Input
                    w="50vh"
                    name="content"
                    placeholder="content"
                    value={form.content}
                    onChange={changeHandler}
                  ></Input>
                </FormControl>
                <FormControl marginTop="2">
                  <FormLabel>Image</FormLabel>
                  <Button
                    w="full"
                    variant="unstyled"
                    onClick={() => inputFileRef?.current?.click()}
                  >
                    <BiSolidImageAdd
                      style={{
                        fontSize: "30px",
                      }}
                    />
                  </Button>
                  <Input
                    type="file"
                    name="image"
                    placeholder="image"
                    onChange={changeHandler}
                    accept="image/*"
                    ref={inputFileRef}
                    style={{ display: "none" }}
                  />
                  {previewImage && <Image boxSize="100px" src={previewImage} />}
                </FormControl>
                <Button type="submit" marginTop="5px">
                  Submit
                </Button>
              </form>
            </Box>

            {/* <Heading>Home</Heading>  */}

            {/* <ThreadCard
            threads={thread}/> */}

            {thread?.map((item, index) => {
              return (
                <>
                  <Box
                    cursor={"pointer"}
                    onClick={() => navigate(`/thread/${item.id}`)}
                  >
                    <ThreadCard
                      key={index}
                      id={item.id}
                      user={item.user}
                      content={item.content}
                      posted_at={item.posted_at}
                      likes_count={item.likes_count}
                      replies_count={item.replies_count}
                      image={item.image}
                      is_liked={item.is_liked}
                    />
                  </Box>
                </>
              )
            })}
          </VStack>
          <ProfilePage />
        </Grid>
      </Container>
    </>
  )
}
