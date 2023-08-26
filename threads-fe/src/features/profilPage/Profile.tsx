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
  useColorModeValue,
  VStack,
  HStack,
  GridItem,
  Grid,
  Card,
} from "@chakra-ui/react"
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai"
import { useSelector } from "react-redux"

export default function ProfilePage() {
  const auth = useSelector((state: RootState) => state.auth)
  console.log(auth, "authnya")
  console.log(auth.data, "authnya data")
  return (
    <VStack marginTop="30px"  position="relative" ml="20" mt="10">
      <Card
        w="44vh"
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
            src={
             auth.data.profile_picture}
            css={{
              border: "2px solid white",
            }}
          />
          <Button
            marginTop="50px"
            borderRadius="20px"
            height="35px"
            backgroundColor="#787d7a"
          >
            Edit Profile
          </Button>
        </Flex>

        <Box p={6}>
          <Stack spacing={0} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {auth.data.full_name}
            </Heading>
            <Text color={"gray.500"}>{auth.data.username}</Text>
            <Text color={"gray.500"}>{auth.data.description}</Text>
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

      <Card
        w="44vh"
        backgroundColor="#505250"
        padding="5"
        borderRadius="10"
      >
        <Box p={6}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            Sugested for you
          </Heading>
          <HStack>
            {/* <Flex> */}
            <Image
              // boxSize="50px"
              height="50px"
              borderRadius="50"
              width="120px"
              objectFit="cover"
              marginTop="25px"
              src="https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />

            <VStack marginTop="6" marginLeft="2">
              <Text fontWeight="bold">lalalla</Text>
              <Text>@lalalla</Text>
            </VStack>
            {/* </Flex> */}

            <Button
              marginLeft="3em"
              w="40"
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              borderRadius="20"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Following
            </Button>
          </HStack>

          <HStack>
            {/* <Flex> */}
            <Image
              // boxSize="50px"
              height="50px"
              borderRadius="50"
              width="120px"
              objectFit="cover"
              marginTop="25px"
              src="https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />

            <VStack marginTop="6" marginLeft="5">
              <Text fontWeight="bold">lalalla</Text>
              <Text>@lalalla</Text>
            </VStack>
            {/* </Flex> */}
            <Button
              marginLeft="3em"
              w="40"
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              borderRadius="20"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Follow
            </Button>
          </HStack>

          <HStack>
            {/* <Flex > */}
            <Image
              // boxSize="50px"
              height="50px"
              borderRadius="50"
              width="120px"
              objectFit="cover"
              marginTop="25px"
              src="https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />

            <VStack marginTop="6" marginLeft="5">
              <Text fontWeight="bold">lalalla</Text>
              <Text>@lalalla</Text>
            </VStack>
            {/* </Flex> */}
            <Button
              marginLeft="3em"
              w="40"
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              borderRadius="20"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Follow
            </Button>
          </HStack>
          <HStack>
            {/* <Flex> */}
            <Image
              // boxSize="50px"
              height="50px"
              borderRadius="50"
              width="120px"
              objectFit="cover"
              marginTop="25px"
              src="https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />

            <VStack marginTop="6" marginLeft="5">
              <Text fontWeight="bold">lalalla</Text>
              <Text>@lalalla</Text>
            </VStack>
            {/* </Flex> */}
            <Button
              marginLeft="3em"
              w="40"
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              borderRadius="20"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Follow
            </Button>
          </HStack>
        </Box>
      </Card>

      <Card
        w="44vh"
        backgroundColor="#505250"
        padding="5"
        borderRadius="10"
      >
        <Box p={6}>
          <Heading fontSize={"2xl"} fontWeight={400} fontFamily={"body"}>
            Developed by Your Name
            <Flex>
              <AiFillGithub />
              <AiFillLinkedin />
              <AiFillFacebook />
              <AiFillInstagram />
            </Flex>
          </Heading>
          <Text>Powered by DumbWays Indonesia . #1 Coding Bootcamp</Text>
        </Box>
      </Card>
    </VStack>
  )
}
