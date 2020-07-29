import React from 'react'
import ThemeX from '../components/theme'
import FindInterface from '../components/FindInterface'

// i'm not sure what this should be called
export default { title: 'Recommendation' }

export const withText = () => {
  return (
    <ThemeX>
      <FindInterface />
    </ThemeX>
  )
}
