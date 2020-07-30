import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import NavSidebar from '../../components/organisms/NavSidebar'
import ThemeX from '../../components/theme'

export default { title: 'Organisms.NavSidebar' }

export const withText = () => {
  return (
    <ThemeX>
      <Router>
        <NavSidebar />
      </Router>
    </ThemeX>
  )
}
