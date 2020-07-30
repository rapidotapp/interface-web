import { Box, Stack } from '@chakra-ui/core'
import React from 'react'

import GroupHeading from '~atoms/GroupHeading'
import CommunityCardSmall from '~molecules/CommunityCardSmall'

export default function AllCommunities() {
  return (
    <Stack>
      <GroupHeading>All Communities</GroupHeading>
      <Stack direction="row" flexWrap="wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          return (
            <Box margin="10px" key={i}>
              <CommunityCardSmall
                title="Rapid"
                totalMembers={1234}
              ></CommunityCardSmall>
            </Box>
          )
        })}
      </Stack>
    </Stack>
  )
}
