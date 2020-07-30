import React from 'react'

import DisplayNavAndPage from '../components/organisms/DisplayNavAndPage'
import FriendList from '../components/organisms/FriendList'

export default function UsersPage() {
  return (
    <DisplayNavAndPage>
      <FriendList />
    </DisplayNavAndPage>
  )
}
