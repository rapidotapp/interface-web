import { Box } from '@chakra-ui/core'
import React, { FunctionComponent } from 'react'

import ThemeX from './components/theme'
import Home from './pages/Home'

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
