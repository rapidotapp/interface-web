import { Stack, Text } from '@chakra-ui/core'
import React from 'react'

import GroupHeading from '~atoms/GroupHeading'
import DropsList from '~molecules/DropsList'

export default function PopularDrops() {
  return (
    <Stack direction="column">
      <GroupHeading>
        <Text>Popular Drops</Text>
      </GroupHeading>
      <DropsList />
    </Stack>
  )
}
