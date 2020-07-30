import React from 'react'

import NavLayout from '../components/organisms/DisplayNavAndPage'
import FriendList from '../components/organisms/FriendList'

export default function UsersPage() {
  return (
    <NavLayout>
      <FriendList />
    </NavLayout>
  )
}
