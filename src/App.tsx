import { Flex } from '@chakra-ui/core'
import React, { FunctionComponent } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import NavSidebar from '~/components/organisms/NavSidebar'

import Communities from './pages/Communities'
import CommunityHome from './pages/CommunityHome'
import Explore from './pages/Explore'

const App: FunctionComponent = () => {
  const location = useLocation()
  const switchLocation = (location: any): string => {
    console.log(location)
    switch (location) {
      case '/app/explore':
        return 'Explore'
      default:
        return 'Communities'
    }
  }

  return (
    <Flex>
      <NavSidebar active={switchLocation(location.pathname)} />
      <Switch>
        <Route exact path="/app/explore" component={Explore} />
        <Route path="/app/:community/:channel" component={Communities} />
        <Route exact path="/app/:community" component={CommunityHome} />
      </Switch>
    </Flex>
  )
}

export default App
