import React from 'react'

import FindInterface from '../../components/organisms/FindInterface'
import ThemeX from '../../components/theme'

export default { title: 'FindInterface' }

export const withText = () => {
  return (
    <ThemeX>
      <FindInterface />
    </ThemeX>
  )
}
