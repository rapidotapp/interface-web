import React from 'react'
import ThemeX from '../components/theme'
import Sidebar from '../components/Sidebar'

export default { title: 'NavSidebar' }

export const withText = () => {
  return (
    <ThemeX>
      <Sidebar />
    </ThemeX>
  )
}
