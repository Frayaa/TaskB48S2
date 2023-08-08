import ProfilePage from "@/features/profilPage/Profile"
import SideBar from "@/features/sidebar/SideBar"
import { ThreadCard } from "@/features/thread/component/ThreadCrad"
import ThreadDetail from "@/features/thread/component/ThreadDetail"
import threads from "@/utils/fakedata/threads.json"
import { Container, Flex, VStack, Box } from "@chakra-ui/react"
import { useState } from "react"

export default function Detail() {
  const [thread] = useState(threads)

  return (
    <>
      <Container marginLeft="-8" h="100vh">
        <Flex>
          <Box >
            <SideBar />
          </Box>

          <VStack>
            <ThreadDetail/>
            {/* {thread.map((item, index) => {
              return (
                <>
                  <Box h="100vh" overflowY="scroll">
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
                  </Box>
                </>
              )
            })} */}
          </VStack>
          <Box>
            <ProfilePage />
          </Box>
        </Flex>
      </Container>
    </>
  )
}
