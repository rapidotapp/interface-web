import React from 'react'
import ThemeX from '../../components/theme'
import FindInterface from '../../components/organisms/FindInterface'

export default { title: 'FindInterface' }

export const withText = () => {
  return (
    <ThemeX>
      <FindInterface />
    </ThemeX>
  )
}
