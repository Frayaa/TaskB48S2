import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Link as LinkChakra,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

import { Link } from "react-router-dom"
import Register from "../register/Register"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const openRegisterModal = () => {
    setIsOpen(true)
  }
  return (
    <>
      <Container
        bg="#5dcfb8"
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <Flex>
          <Box
            bg="white"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 10 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack
                        pl={0}
                        spacing={1}
                        mb="-20"
                        mr="-80"
                        alignItems="flex-start"
                      >
                        <Image
                          alt={"Login Image"}
                          objectFit={"cover"}
                          maxH="70%"
                          maxW="60%"
                          src={
                            "https://img.freepik.com/free-vector/gdpr-concept-illustration_114360-1028.jpg?w=740&t=st=1691673693~exp=1691674293~hmac=be6a97ab3205a55e9a71aee4f730a63d83e02a2eacdf14877b7001e1f384c1c0"
                          }
                        />
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box
                      m={10}
                      color="#0B0E3F"
                      borderRadius="10px"
                      boxShadow={"0 0 10px 3px rgb(0 0 0 / 10%)"}
                      p="24px 40px 32px "
                    >
                      <Heading textColor="black" fontSize={"2xl"} mb="5px">
                        Login
                      </Heading>
                      <VStack spacing={5}>
                        <form>
                          <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input width="32vh" name="email" type="email" />
                            <FormErrorMessage></FormErrorMessage>
                          </FormControl>
                          <FormControl mt="4">
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                              <Input
                                name="password"
                                type={showPassword ? "text" : "password"}
                              />
                              <InputRightElement h={"full"}>
                                <Button
                                  variant={"ghost"}
                                  onClick={() =>
                                    setShowPassword(
                                      (showPassword) => !showPassword
                                    )
                                  }
                                >
                                  {showPassword ? (
                                    <ViewIcon />
                                  ) : (
                                    <ViewOffIcon />
                                  )}
                                </Button>
                              </InputRightElement>
                            </InputGroup>
                            <FormHelperText mt="5" mb="-2" textAlign="right">
                              <LinkChakra
                              // onClick={() => {
                              //   navigate("/forgot-password")
                              // }}
                              >
                                Forgot Password?
                              </LinkChakra>
                            </FormHelperText>
                            <FormErrorMessage></FormErrorMessage>
                          </FormControl>
                          <Center>
                            <Button
                              type={"submit"}
                              bgColor="#5dcfb8"
                              color={"white"}
                              mt="5"
                            >
                              Login
                            </Button>
                          </Center>
                        </form>
                      </VStack>
                      <Stack>
                        <Text align={"center"} mt="20px" mr="2">
                          Don't have an account?
                          <LinkChakra
                            style={{ color: "teal" }}
                            onClick={openRegisterModal}
                          >
                            Register
                          </LinkChakra>
                        </Text>
                      </Stack>
                      <Register
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                      />
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Login
