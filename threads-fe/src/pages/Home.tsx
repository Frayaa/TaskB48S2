import ProfilePage from "@/features/profilPage/Profile"
import SideBar from "@/features/sidebar/SideBar"
import { ThreadCard } from "@/features/thread/component"
import useFetchThreads from "@/hooks/useFetchThreads"
import {
  Box,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  HStack,
  GridItem,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { BiSolidImageAdd } from "react-icons/bi"

export default function Home() {
  const {
    threads,
    form,
    previewImage,
    changeHandler,
    handleSubmit,
    inputFileRef,
  } = useFetchThreads()


  // useEffect(() => {
  //   fetchData()
  // }, [threads])

  return (
    <>
      {/* <Box display={"flex"}> */}
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={3}>
          <SideBar />
        </GridItem>
        <GridItem colSpan={5}>
          <Box marginTop="10" padding="2" borderRadius="15" marginLeft="24">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <HStack>
                <Box>
                  <FormControl>
                    <FormLabel>Add Content</FormLabel>
                    <Input
                      w="50vh"
                      h="5vh"
                      name="content"
                      placeholder="What's Happening?"
                      value={form.content}
                      onChange={changeHandler}
                    ></Input>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl marginTop="2">
                    <Button
                      w="full"
                      variant="unstyled"
                      onClick={() => inputFileRef?.current?.click()}
                    >
                      <BiSolidImageAdd
                        style={{
                          fontSize: "40px",
                          marginTop: "2vh",
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
                  </FormControl>
                </Box>
              </HStack>
              {previewImage && <Image boxSize="150px" src={previewImage} />}
              <Button type="submit" marginTop="8px" bg="#3dad5b">
                Post
              </Button>
            </form>
          </Box>

          {/* <Box> */}
          {threads?.map((item) => {
            return (
              <>
                <ThreadCard
                  key={item.id}
                  id={item.id}
                  user={item.user}
                  content={item.content}
                  posted_at={item.posted_at}
                  likes_count={item.likes_count}
                  replies_count={item.replies_count}
                  image={item.image}
                  is_liked={item.is_liked}
                />
              </>
            )
          })}
          {/* </Box> */}
        </GridItem>
        <GridItem colSpan={4}>
          <Box
            position="fixed"
            bottom="0"
            top="0"
            overflowY="scroll"
            overflowX="hidden"
          >
            <ProfilePage />
          </Box>
        </GridItem>
      </Grid>
   

      {/* </Box> */}
    </>
  )
}
