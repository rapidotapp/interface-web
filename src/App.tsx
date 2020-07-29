import React, { FunctionComponent } from 'react'
import ThemeX from './components/theme'
import Home from './pages/Home'

const App: FunctionComponent = () => {
  return (
    <div>
      <ThemeX>
        <Home />
      </ThemeX>
    </div>
  )
}

export default App
