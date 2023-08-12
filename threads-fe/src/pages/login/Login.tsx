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
  useToast,
} from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

import { Link, useNavigate } from "react-router-dom"
import Register from "../register/Register"
import { ILogin } from "@/interfaces/user"
import { API, setAuthToken } from "@/lib/api"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  const toast = useToast()
  const navigate = useNavigate()

  const [form, setForm] = useState<ILogin>({
    email: "",
    password: "",
  })

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await API.post("/auth/login", form)
      console.log(response.data.data)
      localStorage.setItem("token", response.data)
      setAuthToken(localStorage.token)

      toast({
        title: "Login success",
        status: "success",
      })
      navigate("/")
    } catch (err) {
      console.log(err)
      toast({
        title: "Login Gagal",
        status: "error",
      })
    }
  }
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

export default Login
