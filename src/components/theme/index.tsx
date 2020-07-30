import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core'
import React from 'react'

import theme from './theme'

const ThemedComponent: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ThemeProvider>
)

export default ThemedComponent
