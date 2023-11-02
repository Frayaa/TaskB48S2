import ProfilePage from "@/features/profilPage/ProfilePage"
import SearchPage from "@/features/search/SearchPage"
import SideBar from "@/features/sidebar/SideBar"
import { Box, Grid, GridItem } from "@chakra-ui/react"

export default function Search() {
  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={3}>
          <SideBar />
        </GridItem>
        <GridItem colSpan={5}>
          <SearchPage />
        </GridItem>
        <GridItem colSpan={4}>
          <Box
            position="fixed"
            bottom="0"
            top="0"
            overflowY="scroll"
            overflowX="hidden"
          >
            <ProfilePage />
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}
