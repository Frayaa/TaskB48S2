import { ChangeEvent, FormEvent, useState } from "react"
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react"
import { API } from "@/lib/api"

interface IThreadPost {
  content: string
  image: string
}

interface ICreateModal {
  isOpen: boolean
  onClose: () => void // Menentukan tipe onClose
}

const FormThread = (props: ICreateModal) => {
  const toast = useToast()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form, setForm] = useState<IThreadPost>({
    content: "",
    image: "",
  })

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  // const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   })
  // }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await API.post("/thread", {
        content: form.content,
        image: form.image,
      })
      console.log(response.data, "ini post")
      setForm({
        content: "",
        image: "",
      })
      toast({
        title: "Thread Telah ditambahkan",
        status: "success",
      })

      setIsModalOpen(false)
    } catch (err) {
      console.log(err)
      toast({
        title: "Thread Gagal ditambahkan",
        status: "error",
      })
    }
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Submit Form</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl>
              <FormLabel>Content</FormLabel>
              <Input
                name="content"
                placeholder="Content"
                value={form.content}
                onChange={changeHandler}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input
                name="image"
                placeholder="Image URL"
                value={form.image}
                onChange={changeHandler}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">Submit</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default FormThread
