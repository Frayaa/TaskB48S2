import ProfilePage from "@/features/profilPage/Profile"
import SideBar from "@/features/sidebar/SideBar"
import { ThreadCard } from "@/features/thread/component/ThreadCrad"
import useFetchThreads from "@/hooks/useFetchThreads"
import { IThreadCard, IThreadPost } from "@/interfaces/thread"
import { API } from "@/lib/api"
import {
  Container,
  VStack,
  Box,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

export default function threadcard() {
  // const [thread] = useState(threads)

  const {handleSubmit, changeHandler, thread, form} = useFetchThreads()

  return (
    <>
      <Container marginLeft="-8">
        <Grid templateColumns="repeat(2, 1fr)">
          <SideBar />
          {/* <FormThread isOpen={isModalOpen} onClose={closeModal} /> */}

          <VStack borderRight={"1px"}>
            

            {/* <Heading>Home</Heading>  */}

            {/* <ThreadCard
            threads={thread}/> */}

            {thread?.map((item, index) => {
              return (
                <>
                  <ThreadCard
                    key={index}
                    id={item.id}
                    user={item.user}
                    // author_full_name={item.author_full_name}
                    // author_picture={item.author_picture}
                    // author_username={item.author_username}
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
