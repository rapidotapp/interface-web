import { Box, Flex } from '@chakra-ui/core'
import React from 'react'

import CommunityBar from '~/components/organisms/CommunityBar'
import CommunityDetails from '~/components/organisms/CommunityDetails'
import CommunityMessages from '~/components/organisms/CommunityMessages'
import NavSidebar from '~/components/organisms/NavSidebar'
import ServerList from '~/components/organisms/ServerList'

const Communities = () => {
  return (
    <Flex w="100vw">
      <NavSidebar />
      <ServerList />
      <CommunityBar />
      <Box w="55%">
        <CommunityMessages />
      </Box>
      <CommunityDetails />
    </Flex>
  )
}

export default Communities
