import React from 'react'

import LayoutNav from '~/layouts/LayoutNav'
import FriendList from '~organisms/FriendList'

export default function UsersPage() {
  return (
    <LayoutNav active="friends">
      <FriendList />
    </LayoutNav>
  )
}
