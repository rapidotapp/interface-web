import { Box } from '@chakra-ui/core'
import React, { FunctionComponent } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import ThemeX from './components/theme'
import Chat from './pages/Chat'
import Explore from './pages/Explore'
import Globe from './pages/Globe'
import Users from './pages/Users'

const App: FunctionComponent = () => {
  return (
    <div>
      <ThemeX>
        <Box backgroundColor="#212226">
          <Router>
            <div>
              <Switch>
                <Route path="/globe">
                  <Globe />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/explore">
                  <Explore />
                </Route>
                <Route path="/chat">
                  <Chat />
                </Route>
                <Route path="/">
                  <Redirect to="/explore" />
                </Route>
              </Switch>
            </div>
          </Router>
        </Box>
      </ThemeX>
    </div>
  )
}

export default App
