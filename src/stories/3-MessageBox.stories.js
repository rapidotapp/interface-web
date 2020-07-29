import React from 'react'
import ThemeX from '../components/theme'
import MessageBox from '../components/MessageBox'

export default { title: 'MessageBox' }

export const withText = () => {
  return (
    <ThemeX>
      <MessageBox />
    </ThemeX>
  )
}
