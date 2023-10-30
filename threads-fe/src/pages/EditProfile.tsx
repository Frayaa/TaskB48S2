import { useProfile } from "@/hooks/useProfile"
import { RootState } from "@/stores/types/rootState"
import { SmallCloseIcon } from "@chakra-ui/icons"
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { useSelector } from "react-redux"

const EditProfile = () => {
  const auth = useSelector((state: RootState) => state.auth)
  const {
    changeHandler,
    submitProfile,
    inputFileRef,
    handleCancel,
    previewImage,
  } = useProfile()

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            User Profile Edit
          </Heading>
          <form encType="multipart/form-data" onSubmit={submitProfile}>
            <FormControl id="profile_picture">
              <FormLabel>User Icon</FormLabel>
              <Stack direction={["column", "row"]} spacing={6}>
                <Center>
                  <Avatar
                    size="xl"
                    src={previewImage || auth.data?.profile_picture}
                  ></Avatar>
                </Center>
                <Center w="full">
                  <Button
                    w="full"
                    onClick={() => inputFileRef?.current?.click()}
                  >
                    Change Icon
                  </Button>
                  <Input
                    type="file"
                    name="profile_picture"
                    placeholder="profile_picture"
                    onChange={changeHandler}
                    accept="image/*"
                    ref={inputFileRef}
                    style={{ display: "none" }}
                  />
                </Center>
              </Stack>
            </FormControl>
            <FormControl id="full_name" isRequired>
              <FormLabel>Fullname</FormLabel>
              <Input
                onChange={changeHandler}
                name="full_name"
                defaultValue={auth.data?.full_name}
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
            </FormControl>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                onChange={changeHandler}
                name="username"
                defaultValue={auth?.data?.username}
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
            </FormControl>

            <FormControl id="description" isRequired>
              <FormLabel>description</FormLabel>
              <Input
                placeholder="description"
                name="description"
                onChange={changeHandler}
                defaultValue={auth?.data?.description}
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
            </FormControl>
            <Stack spacing={6} mt="6" direction={["column", "row"]}>
              <Button
                onClick={handleCancel}
                bg={"red.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "red.500",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={submitProfile}
                bg={"blue.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </>
  )
}

export default EditProfile
