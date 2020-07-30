import { Box, Stack, Text } from '@chakra-ui/core'
import React from 'react'

import GroupHeading from '~atoms/GroupHeading'
import CommunityCard from '~molecules/CommunityCard'

export default function RecommendedCommunities() {
  return (
    <Stack spacing={4} direction="column">
      <GroupHeading>
        <Text>Recommended For You</Text>
      </GroupHeading>
      <Stack direction="row" spacing={4}>
        {[1, 2, 3, 4].map((i) => {
          return (
            <Box key={i}>
              <CommunityCard
                title="Rapid"
                description="An aamzing super coolio awese app that auto manual repeat grid"
                totalMembers="1235"
              />
            </Box>
          )
        })}
      </Stack>
    </Stack>
  )
}
