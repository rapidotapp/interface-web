import React from 'react'

import Sidebar from '../../components/organisms/NavSidebar'
import ThemeX from '../../components/theme'

export default { title: 'Organisms.NavSidebar' }

export const withText = () => {
  return (
    <ThemeX>
      <Sidebar />
    </ThemeX>
  )
}
