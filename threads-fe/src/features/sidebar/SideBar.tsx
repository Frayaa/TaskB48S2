import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { AiFillHome, AiOutlineSearch } from "react-icons/ai"
import { RiUserFollowFill } from "react-icons/ri"
import { CgProfile } from "react-icons/cg"
import { useState } from "react"



const SideBar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol modal

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <Container
        width="42vh"
        position="fixed"
        marginLeft="30px"
        marginTop="50px"
        backgroundColor="#f5f7f6"
      p="5"
        borderRadius="10"
        h="46vh"
      >
        <Heading marginLeft="5">Circle</Heading>
        <VStack float="left">
          <ButtonGroup flexDirection="column" gap="3" marginTop="20px">
            <NavLink
              to="/"
              //   style={({ isActive }) => ({
              //     backgroundColor: isActive ? "blue" : "grey",
              //   })}
            >
              <Button backgroundColor="#f5f7f6" marginLeft="2">
                <AiFillHome style={{ marginRight: "10" }} /> Home
              </Button>
            </NavLink>

            <NavLink
              to="/search"
              //   style={({ isActive }) => ({
              //     backgroundColor: isActive ? "blue" : "grey",
              //   })}
            >
              <Button backgroundColor="#f5f7f6">
                <AiOutlineSearch style={{ marginRight: "10" }} /> Search
              </Button>
            </NavLink>

            <NavLink
              to="/follow"
              //   style={({ isActive }) => ({
              //     backgroundColor: isActive ? "blue" : "grey",
              //   })}
            >
              <Button backgroundColor="#f5f7f6">
                <RiUserFollowFill style={{ marginRight: "10" }} /> Follow
              </Button>
            </NavLink>

            <NavLink
              to="/profile"
              //   style={({ isActive }) => ({
              //     backgroundColor: isActive ? "blue" : "grey",
              //   })}
            >
              <Button backgroundColor="#f5f7f6">
                <CgProfile style={{ marginRight: "10" }} /> Profile
              </Button>
            </NavLink>
           
              <Button backgroundColor="#70b582" width="34vh"  onClick={openModal}>
                Create Post
              </Button>
          </ButtonGroup>
        </VStack>
      </Container>

      {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>content</FormLabel>
                  <Input
                    name="content"
                    placeholder="content"
                    value={form.content}
                    onChange={changeHandler}
                  ></Input>
                </FormControl>
                <FormControl>
                  <FormLabel>Image</FormLabel>
                  <Input
                    name="image"
                    placeholder="image"
                    value={form.image}
                    onChange={changeHandler}
                  ></Input>
                </FormControl>
                <Button type="submit">Submit</Button>
              </form>
          </ModalBody>
          <ModalFooter >
            <Button onClick={onSubmit}>Submit</Button>
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  )
}

export default SideBar

// import {
//   Box,
//   Button,
//   Drawer,
//   DrawerOverlay,
//   DrawerCloseButton,
//   DrawerHeader,
//   DrawerBody,
//   DrawerContent,
//   VStack,
// } from '@chakra-ui/react'

// interface SideBar {
//   onClose: Function
//   isOpen: boolean
//   variant: 'drawer' | 'sidebar'
// }

// const SidebarContent = ({ onClick }: { onClick: Function }) => (
//   <VStack>
//     <Button onClick={onClick} w="100%">
//       Home
//     </Button>
//     <Button onClick={onClick} w="100%">
//       About
//     </Button>
//     <Button onClick={onClick} w="100%">
//       Contact
//     </Button>
//   </VStack>
// )

// const Sidebar = ({ isOpen, variant, onClose }: Props) => {
//   return variant === 'sidebar' ? (
//     <Box
//       position="fixed"
//       left={0}
//       p={5}
//       w="200px"
//       top={0}
//       h="100%"
//       bg="#dfdfdf"
//     >
//       <SidebarContent onClick={onClose} />
//     </Box>
//   ) : (
//     <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
//       <DrawerOverlay>
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Chakra-UI</DrawerHeader>
//           <DrawerBody>
//             <SidebarContent onClick={onClose} />
//           </DrawerBody>
//         </DrawerContent>
//       </DrawerOverlay>
//     </Drawer>
//   )
// }

// export default Sidebar
