import React from 'react'
import ThemedComponent from '../components/theme'
import { Box, Flex } from '@chakra-ui/core'

export default { title: 'NavSidebar' }

// const ThemeX = ({ children }) => (
//   <ThemeProvider theme={theme} dark>
//       <ColorModeProvider>
//       <CSSReset/>
//       {children}
//       </ColorModeProvider>
//     </ThemeProvider>
// )

export const withText = () => {
  return (
    <ThemedComponent>
      <Flex row bg="gray.50" color="black">
        <Flex>Hello</Flex>
        <Flex>Hello</Flex>
        <Flex>Hello</Flex>
      </Flex>
    </ThemedComponent>
  )
}
