import ProfilePage from "@/features/profilPage/Profile"
import SideBar from "@/features/sidebar/SideBar"
import { ThreadCard } from "@/features/thread/component/ThreadCrad"
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
  Image,
} from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

export default function Home() {
  // const [thread] = useState(threads)

  const toast = useToast()
  const [thread, setThread] = useState<IThreadCard[]>([])
  const [form, setForm] = useState<IThreadPost>({
    content: "",
    image: "",
  })
  const [previewImage, setPreviewImage] = useState<string>("")

  const fetchData = async () => {
    try {
      const response = await API.get("/threads")
      console.log("ini data", response.data)
      setThread(response.data)
    } catch (err) {
      console.log(err, "error fetching")
    }
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target

    if (files) {
      console.log("ini file image", files[0])
      const image = URL.createObjectURL(files[0])
      setPreviewImage(image)
      setForm({
        ...form,
        [name]: files[0],
      })
    } else {
      setForm({
        ...form,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("content", form.content)
    formData.append("image", form.image as File)
    try {
      const response = await API.post("/thread", formData)
      console.log(response.data, "ini post")
      // setForm({
      //   content: "",
      //   image: "",
      // })
      toast({
        title: "Thread Telah ditambahkan",
        status: "success",
      })
      setForm({
        content: "",
        image: "",
      })
      setPreviewImage("")

      fetchData()
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
                <FormControl>
                  <FormLabel>Image</FormLabel>
                  <Input
                    type="file"
                    name="image"
                    placeholder="image"
                    // value={"Post"}
                    onChange={changeHandler}
                    accept="image/*"
                  />
                  {previewImage && <Image src={previewImage} />}
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
