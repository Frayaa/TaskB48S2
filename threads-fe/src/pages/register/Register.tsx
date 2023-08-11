import { IRegister } from "@/interfaces/user"
import { API } from "@/lib/api"
import { ViewIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"



const Register = () => {
  // const { isOpen, onClose } = useDisclosure()

  const toast = useToast()
  const navigate = useNavigate()

  const [form, setForm] = useState<IRegister>({
    full_name: "",
    username: "",
    email: "",
    password: "",
  })

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await API.post("/auth/register", form)
      console.log(response.data.data)
      navigate("/login")
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
        marginTop="20vh"
      >
        <Box m={10}  width="50vh">
          <Heading color="#3dad5b" fontSize={"3xl"} mb="5px">
            Circle
          </Heading>
          <Text fontWeight="bold" fontSize="2xl" mb="12px">
           
            Create account Circle
          </Text>
          <VStack spacing={5}>
            <form>
              <FormControl>
                <Input
                  width="50vh"
                  
                  name="full_name"
                  onChange={changeHandler}
                  placeholder="Fullname*"
                />
              </FormControl>
              <FormControl>
                <Input
                  width="50vh"
                  mt="4"
                  name="username"
                  onChange={changeHandler}
                  placeholder="Username*"
                />
              </FormControl>
              <FormControl>
                <Input
                  width="50vh"
                  mt="4"
                  name="email"
                  type="email"
                  onChange={changeHandler}
                  placeholder="Email*"
                />
              </FormControl>
              <FormControl mt="4">
                <InputGroup>
                  <Input
                    name="password"
                    
                    onChange={changeHandler}
                    placeholder="Password*"
                  />
                  
                </InputGroup>
                 
              </FormControl>
              <Center>
                <Button
                  type={"submit"}
                  bgColor="#3dad5b"
                  color={"white"}
                  mt="5"
                  w={"full"}
                  borderRadius="20px"
                  onClick={handleRegister}
                  fontSize="20px"
                >
                  Register
                </Button>
              </Center>
            </form>
          </VStack>
          <Stack>
            <Text align={"center"} mt="20px" mr="2">
              Already have account?
              <Link to="/login"  style={{ color: "#3dad5b" }} >
                Login
              </Link>
            </Text>
          </Stack>
        </Box>
      </Container>
      </>
  )
}

export default Register
