import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react"

interface IModalRegister {
  isOpen: boolean
  onClose: () => void
}

interface IRegister

const Register = ({ isOpen, onClose }: IModalRegister) => {
  // const { isOpen, onClose } = useDisclosure()

  const [form, setForm] = useState<IThreadPost>({
    content: "",
    image: "",
  })

  const fetchData = async () => {
    const response = await API.get("/threads")
    console.log("ini data", response.data)
    setThread(response.data)
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Register</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>
              Full Name
              <Input name="full_name" />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              Username
              <Input name="username" />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              Email
              <Input name="email" />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              Password
              <Input name="password" />
            </FormLabel>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            type={"submit"}
            bgColor="#5dcfb8"
            color={"white"}
            mt="5"
           
          >
            Register
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Register
