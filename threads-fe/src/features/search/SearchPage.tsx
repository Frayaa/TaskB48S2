import useFollow from "@/hooks/useFollow"
import useSearch from "@/hooks/useSearch"
import { IFollow } from "@/interfaces/follow"
import { SearchIcon } from "@chakra-ui/icons"
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import FollowCard from "../follow/FollowCard"

const SearchPage = (props: IFollow) => {
  const { query, handleSearchChange, handleSearch, filterUser } = useSearch()
  const { handleFollow } = useFollow()
  const [isFollowed, setIsFollowed] = useState(props.is_followed)

  // const handleFollowUser = (result: IFollow) => {
  //   if (!result.is_followed) {
  //     handleFollow(result.id, result.user_id, result.is_followed)
  //   } else {
  //     console.log("You already follow this user")
  //   }
  // }

  return (
    <Container maxW="container.sm" mt="6vh">
      <VStack spacing={4}>
        <form onSubmit={handleSearch}>
          <Flex gap="8">
            <FormControl>
              <Input
                w="40vh"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search by Fullname or username"
              />
            </FormControl>
            <Button leftIcon={<SearchIcon />} onClick={handleSearch}>
              Search
            </Button>
          </Flex>
        </form>
        {filterUser.length > 0 ? (
          <Box>
            <Text fontWeight="bold">Search Results:</Text>
            {filterUser.map((result) => (
              // <Flex mb="5">
              //   <Image
              //     src={result.profile_picture ?? "/user-placeholder.png"}
              //     w="60px"
              //     h="60px"
              //     objectFit="cover"
              //     borderRadius="50%"
              //     mr="20px"
              //   ></Image>
              //   <Flex gap="24vh">
              //     <Box gap="2">
              //       <Text>{result.full_name}</Text>
              //       <Text>@{result.username}</Text>
              //     </Box>
              //     <Flex justifyContent="flex-end">
              //       <Button
              //         color="white"
              //         bg="#3dad5b"
              //         onClick={() => {
              //           handleFollow(props.id, props.user_id, props.is_followed)
              //           setIsFollowed(!isFollowed)
              //         }}
              //       >
              //         {isFollowed ? "UnFollow" : "Follow"}
              //       </Button>
              //     </Flex>
              //   </Flex>
              // </Flex>
              <FollowCard description={""} {...result} />
            ))}
          </Box>
        ) : (
          <Alert
            status="error"
            variant="subtle"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            alignSelf="center"
            h="200px"
            w="100%"
          >
            <AlertIcon boxSize="20px" mr="0" />
            <AlertTitle>User Not Found</AlertTitle>
            <AlertDescription>
              The user you're looking for does not exist.
            </AlertDescription>
          </Alert>
        )}
      </VStack>
    </Container>
  )
}

export default SearchPage
