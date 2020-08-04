import React from 'react'

import LayoutNav from '~/layouts/LayoutNav'
import Search from '~molecules/Search'
import AllCommunities from '~organisms/AllCommunities'
import PinnedCommunities from '~organisms/PinnedCommunities'

export default function Community() {
  return (
    <LayoutNav active="community">
      <Search />
      <PinnedCommunities />
      <AllCommunities />
    </LayoutNav>
  )
}
