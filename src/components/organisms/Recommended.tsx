import { Box, Stack } from '@chakra-ui/core'
import React from 'react'

import CommunityCard from '../molecules/CommunityCard'

export default function Recommended() {
  return (
    <Stack direction="row">
      {[1, 2, 3, 4].map((num) => {
        return (
          <Box marginLeft="10px" key={num}>
            <CommunityCard
              title="Rapid"
              description="An aamzing super coolio awese app that auto manual repeat grid"
              totalMembers="1235"
            />
          </Box>
        )
      })}
    </Stack>
  )
}
