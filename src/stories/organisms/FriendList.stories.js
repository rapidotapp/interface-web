import React from 'react'

import FriendList from '../../components/organisms/FriendList'
import ThemeX from '../../components/theme'

export default { title: 'Organisms.FriendList' }

export const friendList = () => {
  return (
    <ThemeX>
      <FriendList />
    </ThemeX>
  )
}
