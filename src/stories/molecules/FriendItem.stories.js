import React from 'react'

import FriendItem from '../../components/molecules/FriendItem'
import ThemeX from '../../components/theme'

export default { title: 'FriendItem' }

export const friendItem = () => {
  return (
    <ThemeX>
      <FriendItem
        userSchema={{
          name: 'Safin',
          username: 'safinsingh',
          imageURL:
            'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
          drops: ['Google Translate'],
        }}
      />
    </ThemeX>
  )
}
