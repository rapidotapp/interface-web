import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import CommunityBar from '../../components/organisms/CommunityBar'
import ThemeX from '../../components/theme'

export default { title: 'Organisms.CommunityBar' }

export const communityBar = () => {
  return (
    <ThemeX>
      <Router>
        <CommunityBar />
      </Router>
    </ThemeX>
  )
}
