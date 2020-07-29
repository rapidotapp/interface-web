import React from 'react'
import ThemeX from '../components/theme'
import Sidebar from '../components/NavSidebar'

export default { title: 'NavSidebar' }

export const withText = () => {
  return (
    <ThemeX>
      <Sidebar />
    </ThemeX>
  )
}
