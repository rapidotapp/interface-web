import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import ServerList from '../../components/organisms/ServerList'
import ThemeX from '../../components/theme'

export default { title: 'Organisms.ServerList' }

export const serverList = () => {
  return (
    <ThemeX>
      <Router>
        <ServerList />
      </Router>
    </ThemeX>
  )
}
