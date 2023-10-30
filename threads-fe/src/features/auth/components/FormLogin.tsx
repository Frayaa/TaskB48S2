import {
  Box,
  Button,
  Center,
  Container,
  Link as LinkChakra,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

import { Link } from "react-router-dom"
import useLogin from "@/hooks/userLogin"

const FormLogin = () => {
  const { changeHandler, handleLogin} = useLogin()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <Container
        maxW="full"
        maxH="full"
        centerContent
        justifyContent="center"
        marginTop="25vh"
      >
        <Box m={10} width="50vh">
          <Heading color="#3dad5b" fontSize={"3xl"} mb="5px">
            Circle
          </Heading>
          <Text fontWeight="bold" fontSize="2xl" mb="12px">
            Login to Circle{" "}
          </Text>
          {/* <Button onClick={() => (console.log(auth, "ini button"))}></Button> */}

          <VStack spacing={5}>
            <form>
              <FormControl>
                <Input
                  width="50vh"
                  // w={"2xl"}
                  name="email"
                  type="email"
                  onChange={changeHandler}
                  placeholder="Email/Username*"
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl mt="4">
                <InputGroup>
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    onChange={changeHandler}
                    placeholder="Password*"
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
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
                  bgColor="#3dad5b"
                  color={"white"}
                  mt="5"
                  w={"full"}
                  borderRadius="20px"
                  onClick={handleLogin}
                  fontSize="20px"
                >
                  Login
                </Button>
              </Center>
            </form>
          </VStack>
          <Stack>
            <Text align={"center"} mt="20px" mr="2">
              Don't have an account yet?
              <Link to="/register" style={{ color: "#3dad5b" }}>
                Create Account
              </Link>
            </Text>
          </Stack>
        </Box>
      </Container>
    </>
  )
}

export default FormLogin
