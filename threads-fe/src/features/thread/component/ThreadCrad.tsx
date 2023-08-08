import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { FcLikePlaceholder } from "react-icons/fc"
import { BiMessageDots } from "react-icons/bi"
// import SideBar from "@/features/sidebar/SideBar"

interface ThreadCard {
  //mirip struct golang
  id: number
  author_picture?: string
  author_full_name?: string
  author_username?: string
  posted_at?: string
  content?: string
  likes_count: number
  replies_count?: number // bisa gini juga string | number
  image: string
  is_liked: boolean
}

export const ThreadCard = (props: ThreadCard) => {
  return (
    <>
      <Container>
        {/* <Flex> */}
        {/* <VStack>{SideBar()}</VStack> */}

        {/* <VStack> */}
        {/* <Heading>Home</Heading> */}
        {/* <Box>
              <Image
                boxSize="80px"
                borderRadius="full"
                width="260px"
                objectFit="cover"
                src={props.author_picture}
              />
              What's Hapenning?
            </Box> */}
        <Flex padding="40px">
          <Image
            // boxSize="50px"
            height="60px"
            borderRadius="50%"
            width="600px"
            objectFit="cover"
            marginTop="25px"
            src={props.author_picture}
          />
          <Grid marginLeft="20px" marginTop="20px">
            <Flex>
              <Text fontWeight="bold">{props.author_full_name}</Text>
              <Text marginLeft="10px">@{props.author_username}</Text>
              <Text marginLeft="10px">{props.posted_at}</Text>
            </Flex>
            <Text noOfLines={[1, 2, 3]}>{props.content}</Text>

            <Image
              src={props.image}
              width="300px"
              height="400px"
              marginTop="15px"
            />
            <Box style={{ marginTop: "20px" }}>
              <Button
                style={{
                  backgroundColor: props.is_liked ? "red" : "#fcfcfc",
                }}
              >
                <FcLikePlaceholder />
                <Text textAlign="justify">{props.likes_count}</Text>
              </Button>
              <Button width="150px" marginLeft="10px" backgroundColor="#fcfcfc">
                <BiMessageDots />
                <Text marginLeft="5px">{props.replies_count} Replies</Text>
              </Button>
            </Box>
          </Grid>
        </Flex>
        {/* </VStack> */}
        {/* </Flex> */}
      </Container>
    </>
  )
}
