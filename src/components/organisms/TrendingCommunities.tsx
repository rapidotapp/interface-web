import { Stack, Text } from '@chakra-ui/core'
import React from 'react'

import GroupHeading from '~atoms/GroupHeading'
import CommunityCard from '~molecules/CommunityCard'

export default function Trending() {
  return (
    <Stack spacing={4} direction="column">
      <GroupHeading>
        <Text>Trending</Text>
      </GroupHeading>
      <CommunityCard
        title="Rapid"
        description="An aamzing super coolio awese app that auto manual repeat grid"
        totalMembers={1235}
      />
    </Stack>
  )
}
