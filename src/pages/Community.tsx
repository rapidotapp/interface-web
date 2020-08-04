import React from 'react'

import Search from '~molecules/Search'
import AllCommunities from '~organisms/AllCommunities'
import NavLayout from '~organisms/NavSidebar'
import PinnedCommunities from '~organisms/PinnedCommunities'

export default function Community() {
  return (
    <NavLayout active="community">
      <Search />
      <PinnedCommunities />
      <AllCommunities />
    </NavLayout>
  )
}
