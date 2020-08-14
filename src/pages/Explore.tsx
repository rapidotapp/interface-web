import { Flex } from '@chakra-ui/core'
import React from 'react'

import ExplorePage from '~/components/organisms/ExplorePage'
import NavSidebar from '~/components/organisms/NavSidebar'

const Explore = () => {
  return (
    <Flex>
      <NavSidebar />
      <ExplorePage />
    </Flex>
  )
}

export default Explore
