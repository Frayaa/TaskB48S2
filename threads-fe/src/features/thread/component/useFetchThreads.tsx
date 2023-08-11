import { API } from "@/lib/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ThreadCard } from "@/features/thread/component/ThreadCrad"
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"

const useFetchThreads = () => {
  // const [isLiked, setIsLiked] = useState(props.is_liked)
  // const [likeCount, setLikeCount] = useState(props.likes_count)
  const [thread, setThread] = useState()
  const { id } = useParams()

  

  const fetchData = async () => {
    const response = await API.get("/threads")
    console.log("ini data", response.data)
    setThread(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const getThreadById = async () => {
    const response = await API.get(`/thread/${id}`)
    setThread(response.data)

    useEffect(() => {
      getThreadById()
    }, [])
  }

  return (
    <Box marginTop="5" padding="2" borderRadius="15" marginLeft="80">
      <FormControl>
        <FormLabel>
          <Input name="content" placeholder="content" > </Input>
          <Input name="image" placeholder="image"></Input>
          <Box>
            <Button>Submit</Button>
          </Box>
        </FormLabel>
      </FormControl>
    </Box>
  )
}
export default useFetchThreads
