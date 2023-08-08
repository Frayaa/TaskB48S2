import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react"

export default function ProfilePage() {
  return (
    // <Center py={6}>
    <Box w="300vh" overflow={"hidden"} padding="40px">
      <Image
        h={"120px"}
        w={"full"}
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
        {/* <Center> */}
        <Button marginTop="48px">Edit Profile</Button>
        {/* </Center> */}
      </Flex>

      <Box p={6}>
        <Stack spacing={0} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            John Doe
          </Heading>
          <Text color={"gray.500"}>Frontend Developer</Text>
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>23k</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Followers
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>23k</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Followers
            </Text>
          </Stack>
        </Stack>

        <Button
          w={"full"}
          mt={8}
          bg={useColorModeValue("#151f21", "gray.900")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Follow
        </Button>
      </Box>
    </Box>
    // </Center>
  )
}
