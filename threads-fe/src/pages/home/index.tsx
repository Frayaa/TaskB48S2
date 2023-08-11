import ProfilePage from "@/features/profilPage/Profile"
import SideBar from "@/features/sidebar/SideBar"
import { IThreadCard, ThreadCard } from "@/features/thread/component/ThreadCrad"
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

interface IThreadPost {
  content: string
  image: string
}

export default function Home() {
  // const [thread] = useState(threads)

  // const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol modal

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const toast = useToast()
  const [thread, setThread] = useState<IThreadCard[]>()
  const [form, setForm] = useState<IThreadPost>({
    content: "",
    image: "",
  })

  const fetchData = async () => {
    const response = await API.get("/threads")
    console.log("ini data", response.data)
    setThread(response.data)
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  // const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   })
  // }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await API.post("/thread", {
        content: form.content,
        image: form.image,
      })
      console.log(response.data, "ini post")
      setForm({
        content: "",
        image: "",
      })
      toast({
        title: "Thread Telah ditambahkan",
        status: "success",
      })

      fetchData()
      // setIsModalOpen(false)
      console.log(fetchData, "ini baru")
    } catch (err) {
      console.log(err)
      toast({
        title: "Thread Gagal ditambahkan",
        status: "error",
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Container marginLeft="-8">
        <Grid templateColumns="repeat(2, 1fr)">
          <SideBar  />
          {/* <FormThread isOpen={isModalOpen} onClose={closeModal} /> */}

          <VStack borderRight={"1px"}>
            <Box marginTop="5" padding="2" borderRadius="15" marginLeft="80" >
              <form onSubmit={handleSubmit}>
                <FormControl >
                  <FormLabel>content</FormLabel>
                  <Input
                  w="50vh"
                    name="content"
                    placeholder="content"
                    value={form.content}
                    onChange={changeHandler}
                  ></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>Image</FormLabel>
                  <Input
                    name="image"
                    placeholder="image"
                    value={form.image}
                    onChange={changeHandler}
                  ></Input>
                </FormControl>
                <Button type="submit" marginTop="5px">Submit</Button>
              </form>
            </Box>

            {/* <Heading>Home</Heading>  */}

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
