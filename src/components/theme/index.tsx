import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/core'
import React from 'react'
// eslint-disable-next-line react/prop-types
const ThemedComponent = ({ children }) => (
  <ThemeProvider theme={theme} dark>
    <ColorModeProvider>
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ThemeProvider>
)

export default ThemedComponent
