import { Box, Stack } from '@chakra-ui/core'
import React from 'react'

import { commonShadow, mediumBorderRadius } from '../common'
import CommunityCardSmall from './CommunityCardSmall'

export default function DropList() {
  return (
    <Box
      backgroundColor="#292A2F"
      padding="15px"
      boxShadow={commonShadow}
      borderRadius={mediumBorderRadius}
    >
      <Stack direction="row" spacing={6}>
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <Box key={i}>
              <CommunityCardSmall title="Rapid" totalMembers={1234} />
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}
