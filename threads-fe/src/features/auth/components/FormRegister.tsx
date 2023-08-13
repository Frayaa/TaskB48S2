import { useRegister } from "@/hooks/useRegister"
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
} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const FormRegister = () => {
  const { changeHandler, handleRegister } = useRegister()

  return (
    <>
      <Container
        maxW="full"
        maxH="full"
        centerContent
        justifyContent="center"
        marginTop="20vh"
      >
        <Box m={10} width="50vh">
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
              <Link to="/login" style={{ color: "#3dad5b" }}>
                Login
              </Link>
            </Text>
          </Stack>
        </Box>
      </Container>
    </>
  )
}

export default FormRegister
