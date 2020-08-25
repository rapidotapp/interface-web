import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import CommunityDetails from '../../components/organisms/CommunityDetails'
import ThemeX from '../../components/theme'

export default { title: 'Organisms.CommunityDetails' }

export const communityDetails = () => {
  return (
    <ThemeX>
      <Router>
        <CommunityDetails />
      </Router>
    </ThemeX>
  )
}
