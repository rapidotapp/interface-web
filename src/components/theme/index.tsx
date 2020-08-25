import {
  ColorModeProvider,
  CSSReset,
  theme,
  ThemeProvider,
} from '@chakra-ui/core'
import React from 'react'

const ThemeX: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ThemeProvider>
)

export default ThemeX
