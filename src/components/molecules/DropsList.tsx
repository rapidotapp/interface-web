import React from 'react'
import DropCardSmall from './DropCardSmall'
import { Stack, Box } from '@chakra-ui/core'
import { commonShadow } from '../common'

export default function DropList() {
  return (
    <Box
      padding="10px"
      boxShadow={commonShadow}
      borderRadius="20px"
      backgroundColor="#292A2F"
    >
      <Stack direction="row" spacing={6}>
        {[1, 2, 3, 4, 5, 6].map((i) => {
          return (
            <Box key={i}>
              <DropCardSmall />
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}
