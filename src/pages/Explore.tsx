import { Box, Flex } from '@chakra-ui/core'
import React from 'react'

import NavLayout from '~organisms/DisplayNavAndPage'
import FindInterface from '~organisms/FindInterface'
import PopularDrops from '~organisms/PopularDrops'
import RecommendedCommunities from '~organisms/RecommendedCommunities'
import TrendingCommunities from '~organisms/TrendingCommunities'

export default function ExplorePage() {
  return (
    <NavLayout active="explore">
      <FindInterface />
      <PopularDrops />
      <Flex>
        <Box marginRight="20px">
          <TrendingCommunities />
        </Box>
        <RecommendedCommunities />
      </Flex>
    </NavLayout>
  )
}
