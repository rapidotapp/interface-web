import React from 'react'
import { Button } from '@chakra-ui/core'
import ThemeX from '../components/theme'

export default { title: 'Button' }

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
    <ThemeX>
      <Button>Hello</Button>
    </ThemeX>
  )
}
export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
