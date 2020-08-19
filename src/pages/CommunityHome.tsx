import { Flex } from '@chakra-ui/core'
import React from 'react'

import CommunityBar from '~/components/organisms/CommunityBar'
import CommunityHomeMain from '~/components/organisms/CommunityHomeMain'
import ServerList from '~/components/organisms/ServerList'

const CommunityHome = () => {
  return (
    <Flex>
      <ServerList />
      <CommunityBar />
      <CommunityHomeMain />
    </Flex>
  )
}

export default CommunityHome
