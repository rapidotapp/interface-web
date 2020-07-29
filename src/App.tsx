import React, { FunctionComponent } from 'react'
import ThemeX from './components/theme'
import Home from './pages/Home'
import { Box } from '@chakra-ui/core'

const App: FunctionComponent = () => {
  return (
    <div>
      <ThemeX>
        <Box backgroundColor="#212226">
          <Home />
        </Box>
      </ThemeX>
    </div>
  )
}

export default App
