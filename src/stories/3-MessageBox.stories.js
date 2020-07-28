// import React from 'react'
// import ThemedComponent from '../components/theme'

// import {
//   Box,
//   Button,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Icon,
//   Flex,
//   Stack,
//   InputLeftElement,
//   InputLeftAddon,
//   Popover,
//   PopoverArrow,
//   PopoverBody,
//   PopoverContent,
//   PopoverTrigger,
//   PopoverCloseButton,
//   PopoverHeader,
//   PopoverFooter,
// } from '@chakra-ui/core'
// import {
//   Camera,
//   Image,
//   Bold,
//   Italic,
//   Underline,
//   PlusCircle,
//   Smile,
//   File,
// } from 'react-feather'
// export default { title: 'MessageBox' }

// // const ThemeX = ({ children }) => (
// //   <ThemeProvider theme={theme} dark>
// //       <ColorModeProvider>
// //       <CSSReset/>
// //       {children}
// //       </ColorModeProvider>
// //     </ThemeProvider>
// // )

// export const withText: React.FC = () => {
//   const [show, setShow] = React.useState(false)
//   const handleClick = () => setShow(!show)

//   return (
//     <ThemedComponent>
//       <InputGroup roundedRight="md" size="md">
//         {/* <Stack padding="2rem"> */}
//   <InputLeftAddon height="4rem">#{'channel'}</InputLeftAddon>
//         <Input
//           height="4rem"
//           type={show ? 'text' : 'password'}
//           placeholder="Send a message!"
//         />
//         <InputRightElement minWidth="7rem" alignContent="right" height="100%">
//           <Popover usePortal>
//             <PopoverTrigger>
//               <Button variant="ghost">
//                 <Smile />
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent zIndex={4}>
//               <PopoverArrow />
//               <PopoverHeader>Reactions</PopoverHeader>
//               <PopoverCloseButton />
//               <PopoverBody>
//                 <Button variantColor="blue">Button</Button>
//               </PopoverBody>
//               <PopoverFooter>
//                   <Flex justifyContent="space-between">
//                   <Button>Add Emoji</Button>
//                   {/* <Flex> */}
//                   <Camera/>
//                   {/* </Flex> */}
//                   </Flex>
//                   </PopoverFooter>
//             </PopoverContent>
//           </Popover>
//           <Popover usePortal >
//             <PopoverTrigger>
//               <Button variant="ghost">
//                 <PlusCircle />
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent width="6rem" zIndex={4}>
//               <PopoverArrow />
//               {/* <PopoverCloseButton /> */}
//               <PopoverHeader>
//                   <Button variant="ghost"><Image/></Button>
//                   <Button variant="ghost"><File/></Button>
//               </PopoverHeader>

//               {/* <PopoverFooter>This is the footer</PopoverFooter> */}
//             </PopoverContent>
//           </Popover>
//         </InputRightElement>
//         {/* <Stack direction="row">
//         <Stack direction="row" justifySelf="start">
//           <Button paddingY="1rem">
//             <Image />
//           </Button>
//           <Button>
//             <Bold />
//           </Button>
//           <Button>
//             <Italic />
//           </Button>
//           <Button>
//             <Underline />
//           </Button>
//         </Stack>
//       </Stack>
//       </Stack> */}
//       </InputGroup>
//     </ThemedComponent>
//   )
// }
