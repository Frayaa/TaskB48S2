import FollowCard from "@/features/follow/FollowCard"
import SideBar from "@/features/sidebar/SideBar"
import { API } from "@/lib/api"
import { GET_FOLLOWS, SET_FOLLOWS_STATE } from "@/stores/rootReducer"
import { RootState } from "@/stores/types/rootState"
import {
  Avatar,
  AvatarBadge,
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const Follows = () => {
  const followState = useSelector(
    (state: RootState) => state.follow.followState
  )
  const follows = useSelector((state: RootState) => state.follow.follows)
  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const fetchFollow = async () => {
    const response = await API.get(`/follows?type=${followState}`)
    dispatch(GET_FOLLOWS(response.data))
  }

  useEffect(() => {
    fetchFollow()
  }, [followState])

  return (
    <>
    {/* <Center> */}
    <Grid templateColumns="repeat(12, 1fr)">

    <GridItem colSpan={3}>
          <SideBar />
        </GridItem>

        <GridItem colSpan={5}>


      <Stack justifyContent={"center"} alignItems="center" py="10"  borderRadius="6px"
      
      pb="10"
      pr="10"
      pl="10">
        
        <Avatar src={auth.data.profile_picture}></Avatar>
        <Stack spacing={0} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {auth.data.full_name}
          </Heading>
          <Text color={"gray.500"}>{auth.data.username}</Text>
          <Text color={"gray.500"}>{auth.data.description}</Text>
        </Stack>
        <Box>
          <Tabs isFitted variant="enclosed" width="30em" marginTop={"20px"}>
            <TabList mb="1em">
              <Tab _selected={{ color: "#3dad5b", bg:"#e1e3e1" }} 
              onClick={() => dispatch(SET_FOLLOWS_STATE("followers"))}>
                Followers
              </Tab>
              <Tab _selected={{ color: "#3dad5b", bg:"#e1e3e1" }}  
              onClick={() => dispatch(SET_FOLLOWS_STATE("followings"))}>
                Followings
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {follows.map((follow, index) => (
                  <FollowCard
                    key={index}
                    id={follow.id}
                    user_id={follow.user_id}
                    full_name={follow.full_name}
                    username={follow.username}
                    email={follow.email}
                    profile_picture={follow.profile_picture}
                    description={follow.description}
                    is_followed={follow.is_followed}
                  />
                ))}
              </TabPanel>
              <TabPanel>
                {follows.map((follow, index) => (
                  <FollowCard
                    key={index}
                    id={follow.id}
                    user_id={follow.user_id}
                    full_name={follow.full_name}
                    username={follow.username}
                    email={follow.email}
                    profile_picture={follow.profile_picture}
                    description={follow.description}
                    is_followed={follow.is_followed}
                  />
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Stack>
      </GridItem>

      </Grid>
    {/* </Center> */}

    </>
  )
}

export default Follows
