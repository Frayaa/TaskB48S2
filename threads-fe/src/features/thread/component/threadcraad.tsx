// import ProfilePage from "@/features/profilPage/Profile"
// import SideBar from "@/features/sidebar/SideBar"
// import { ThreadCard } from "@/features/thread/component/ThreadCrad"
// import useFetchThreads from "@/hooks/useFetchThreads"
// import { IThreadCard, IThreadPost } from "@/interfaces/thread"
// import { API } from "@/lib/api"
// import {
//   Container,
//   VStack,
//   Box,
//   Grid,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   useToast,
//   Image,
// } from "@chakra-ui/react"

// const threadcard = () => {
//   // const [thread] = useState(threads)

//   const { form, changeHandler, handleSubmit} = useFetchThreads()

//   // const {handleSubmit, changeHandler } = useFetchThreads()

//   return (
//     <>
     

//           <VStack borderRight={"1px"}>
//             <Box marginTop="5" padding="2" borderRadius="15" marginLeft="80">
//               <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <FormControl>
//                   <FormLabel>content</FormLabel>
//                   <Input
//                     w="50vh"
//                     name="content"
//                     placeholder="content"
//                     value={form.content}
//                     onChange={changeHandler}
//                   ></Input>
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel>Image</FormLabel>
//                   <Input
//                     type="file"
//                     name="image"
//                     placeholder="image"
//                     // value={"Post"}
//                     onChange={changeHandler}
//                     accept="image/*"
//                   />
//                   {previewImage && <Image src={previewImage} />}
//                 </FormControl>
//                 <Button type="submit" marginTop="5px">
//                   Submit
//                 </Button>
//               </form>
//             </Box>

//             {/* <Heading>Home</Heading>  */}

//             {/* <ThreadCard
//             threads={thread}/> */}

//             {/* {thread?.map((item, index) => {
//               return (
//                 <>
//                   <ThreadCard
//                     key={index}
//                     id={item.id}
//                     user={item.user}
//                     // author_full_name={item.author_full_name}
//                     // author_picture={item.author_picture}
//                     // author_username={item.author_username}
//                     content={item.content}
//                     posted_at={item.posted_at}
//                     likes_count={item.likes_count}
//                     replies_count={item.replies_count}
//                     image={item.image}
//                     is_liked={item.is_liked}
//                   />
//                 </>
//               )
//             })} */}
//           </VStack>
       
      
//     </>
//   )
// }

// export default threadcard
