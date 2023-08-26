import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/react"
import { NavLink, useNavigate } from "react-router-dom"
import { AiFillHome, AiOutlineSearch } from "react-icons/ai"
import { RiUserFollowFill } from "react-icons/ri"
import { CgProfile } from "react-icons/cg"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AUTH_LOGOUT } from "@/stores/rootReducer"

const SideBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const btnLogout = () => {
    localStorage.removeItem("token")
    dispatch(AUTH_LOGOUT())
    navigate("/login")
  }

  return (
    <>
      <Container
        width="42vh"
        position="fixed"
        marginLeft="20px"
        marginTop="50px"
        backgroundColor="#505250"
        p="5"
        borderRadius="10"
        h="46vh"
      >
        <Heading marginLeft="5" color="#3dad5b">
          Circle
        </Heading>
        <VStack float="left">
          <ButtonGroup flexDirection="column" gap="3" marginTop="20px">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#31ad80" : "#505250", width:"108px", borderRadius:"5px", marginLeft: "2px"
              })}
            >
              <Button marginLeft="2">
                <AiFillHome style={{ marginRight: "10" }} /> Home
              </Button>
            </NavLink>

            <NavLink
              to="/search"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#31ad80" : "#505250", width:"108px", borderRadius:"5px"
              })}
            >
              <Button >
                <AiOutlineSearch style={{ marginRight: "10" }} /> Search
              </Button>
            </NavLink>

            <NavLink
              to="/follows"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#31ad80" : "#505250", width:"108px", borderRadius:"5px"
              })}
            >
              <Button >
                <RiUserFollowFill style={{ marginRight: "10" }} /> Follow
              </Button>
            </NavLink>

            <NavLink
              to="/profile"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#31ad80" : "#505250", width:"108px", borderRadius:"5px"
              })}
            >
              <Button backgroundColor="#505250">
                <CgProfile style={{ marginRight: "10" }} /> Profile
              </Button>
            </NavLink>

            <Button backgroundColor="#3dad5b" width="34vh">
              Create Post
            </Button>
          </ButtonGroup>
        </VStack>

        <Spacer />

        <Box color="white" w="50%" marginTop="75vh">
          <Container
            as={Stack}
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "center" }}
          >
            <Button
              cursor="pointer"
              variant="outlined"
              backgroundColor="#3dad5b"
              width="34vh"
              _hover={{ bg: "#545c56" }}
              onClick={btnLogout}
            >
              LOGOUT
            </Button>
          </Container>
        </Box>
      </Container>
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
