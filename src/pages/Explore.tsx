import { Stack } from '@chakra-ui/core'
import React from 'react'

import DisplayNavAndPage from '../components/organisms/DisplayNavAndPage'
import FindInterface from '../components/organisms/FindInterface'
import PopularDrops from '../components/organisms/PopularDrops'
import RecommendedCommunities from '../components/organisms/RecommendedCommunities'
import TrendingCommunities from '../components/organisms/TrendingCommunities'

export default function ExplorePage() {
  return (
    <DisplayNavAndPage>
      <FindInterface />
      <PopularDrops />
      {/* TODO why this spacing not working? @eankeen / Nicholas /  Edwin if you know why / fix this */}
      <Stack spacing={4} marginTop="15px" direction="row">
        <TrendingCommunities />
        <RecommendedCommunities />
      </Stack>
    </DisplayNavAndPage>
  )
}
