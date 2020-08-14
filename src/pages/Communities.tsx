import { Flex } from '@chakra-ui/core'
import React, { useState } from 'react'

import CommunityBar from '~/components/organisms/CommunityBar'
import CommunityDetails from '~/components/organisms/CommunityDetails'
import CommunityMessages from '~/components/organisms/CommunityMessages'
import NavSidebar from '~/components/organisms/NavSidebar'
import ServerList from '~/components/organisms/ServerList'

const Communities = () => {
  const [isDetailOpen, setDetailOpen] = useState(true) // TODO: extract all states like this into a context
  const handleDetail = () => setDetailOpen(!isDetailOpen)

  return (
    <Flex>
      <NavSidebar />
      <ServerList />
      <CommunityBar />
      <CommunityMessages handleDetail={handleDetail} />
      <CommunityDetails isOpen={isDetailOpen} handleDetail={handleDetail} />
    </Flex>
  )
}

export default Communities
