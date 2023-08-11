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
} from "@chakra-ui/react"
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai"

export default function ProfilePage() {
  return (
    <VStack marginTop="30px" marginLeft="30px" position="relative">
      <GridItem
        w="50vh"
        backgroundColor="#f5f7f6"
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
              "https://images.unsplash.com/photo-1681863177225-5fa13305ea95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            css={{
              border: "2px solid white",
            }}
          />
          <Button
            marginTop="50px"
            borderRadius="20px"
            height="35px"
            backgroundColor="#d9dedc"
          >
            Edit Profile
          </Button>
        </Flex>

        <Box p={6}>
          <Stack spacing={0} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              Lalalala
            </Heading>
            <Text color={"gray.500"}>@lalala</Text>
            <Text color={"gray.500"}>Frontend Developer</Text>
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
      </GridItem>

      <GridItem
        w="50vh"
        backgroundColor="#f5f7f6"
        padding="5"
        borderRadius="10"
      >
        <Box p={6}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            Sugested for you
          </Heading>
          <HStack>
            <Flex>
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
            </Flex>
            <Button
              marginLeft="8em"
              w="34"
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
            <Flex>
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
            </Flex>
            <Button
              marginLeft="8em"
              w="30"
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
            <Flex>
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
            </Flex>
            <Button
              marginLeft="8em"
              w="30"
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
            <Flex>
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
            </Flex>
            <Button
              marginLeft="8em"
              w="30"
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
      </GridItem>

      <GridItem
        w="50vh"
        backgroundColor="#f5f7f6"
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
      </GridItem>
    </VStack>
  )
}
