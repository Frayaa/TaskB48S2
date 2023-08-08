import ProfilePage from "@/features/profilPage/Profile"
import SideBar from "@/features/sidebar/SideBar"
import { ThreadCard } from "@/features/thread/component/ThreadCrad"
import threads from "@/utils/fakedata/threads.json"
import { Container, Flex, VStack, Box, Grid, Heading, Image, Text } from "@chakra-ui/react"
import { useState } from "react"

export default function Home() {
  const [thread] = useState(threads)

  return (
    <>
      <Container marginLeft="-8" >
        <Grid templateColumns='repeat(2, 1fr)'>
    
            <SideBar />
         

          <VStack>
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
            {thread.map((item, index) => {
              return (
                <>
                    <ThreadCard
                      key={index}
                      id={item.id}
                      author_full_name={item.author_full_name}
                      author_picture={item.author_picture}
                      author_username={item.author_username}
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
          </VStack>
          {/* <Box> */}
            <ProfilePage />
          {/* </Box> */}
        </Grid>
      </Container>
    </>
  )
}
