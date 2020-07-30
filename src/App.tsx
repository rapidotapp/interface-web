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
import Community from './pages/Community'
import Explore from './pages/Explore'
import Users from './pages/Users'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <ThemeX>
        <Box backgroundColor="#212226">
          <Router>
            <div>
              <Switch>
                <Route path="/community">
                  <Community />
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
