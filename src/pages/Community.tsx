import React from 'react'

import Search from '../components/molecules/Search'
import AllCommunities from '../components/organisms/AllCommunities'
import DisplayNavAndPage from '../components/organisms/DisplayNavAndPage'
import PinnedCommunities from '../components/organisms/PinnedCommunities'

export default function Community() {
  return (
    <DisplayNavAndPage>
      <Search />
      <PinnedCommunities />
      <AllCommunities />
    </DisplayNavAndPage>
  )
}
