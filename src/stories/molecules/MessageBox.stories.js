import React from 'react'

import MessageBox from '../../components/molecules/MessageBox'
import ThemeX from '../../components/theme'

export default { title: 'Molecules.MessageBox' }

export const withText = () => {
  return (
    <ThemeX>
      <MessageBox />
    </ThemeX>
  )
}
