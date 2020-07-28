import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  DarkMode,
} from '@chakra-ui/core'
import React from 'react'
// eslint-disable-next-line react/prop-types
const ThemedComponent: React.FC = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider value="dark">
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ThemeProvider>
)

export default ThemedComponent
