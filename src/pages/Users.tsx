import React from 'react'

import NavLayout from '~organisms/DisplayNavAndPage'
import FriendList from '~organisms/FriendList'

export default function UsersPage() {
  return (
    <NavLayout active="friends">
      <FriendList />
    </NavLayout>
  )
}
