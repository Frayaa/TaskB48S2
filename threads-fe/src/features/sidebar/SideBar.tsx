import {
  Button,
  ButtonGroup,
  Container,
  Heading,
  Stack,
  VStack,
} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <>
      <Container
        width="300px"
        height="max-content"
        marginLeft="20px"
        marginTop="50px"
      >
        <Heading>Circle</Heading>
        <VStack float="left">
          <ButtonGroup flexDirection="column" gap="5" marginTop="20px">
            <NavLink
              to="/"
              //   style={({ isActive }) => ({
              //     backgroundColor: isActive ? "blue" : "grey",
              //   })}
            >
              <Button backgroundColor="white">Home</Button>
            </NavLink>

            <NavLink
              to="/search"
              //   style={({ isActive }) => ({
              //     backgroundColor: isActive ? "blue" : "grey",
              //   })}
            >
              <Button backgroundColor="white">Search</Button>
            </NavLink>

            <NavLink
              to="/follow"
              //   style={({ isActive }) => ({
              //     backgroundColor: isActive ? "blue" : "grey",
              //   })}
            >
              <Button backgroundColor="white">Follows</Button>
            </NavLink>

            <NavLink
              to="/profile"
              //   style={({ isActive }) => ({
              //     backgroundColor: isActive ? "blue" : "grey",
              //   })}
            >
              <Button backgroundColor="white">Profile</Button>
            </NavLink>
            <NavLink
              to="/post"
              //   style={({ isActive }) => ({
              //     backgroundColor: isActive ? "blue" : "grey",
              //   })}
            >
              <Button backgroundColor="green" width="40vh">
                Create Post
              </Button>
            </NavLink>
          </ButtonGroup>
        </VStack>
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
