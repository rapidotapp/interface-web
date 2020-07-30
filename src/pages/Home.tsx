import { Box, Stack, Text } from '@chakra-ui/core'
import React from 'react'

import GroupHeading from '../components/atoms/GroupHeading'
import DropsList from '../components/molecules/DropsList'
import FindInterface from '../components/organisms/FindInterface'
import NavSidebar from '../components/organisms/NavSidebar'
import Recommended from '../components/organisms/Recommended'
import Trending from '../components/organisms/Trending'

export default function Home(): JSX.Element {
  return (
    <Stack spacing={4} direction="row" width="100%">
      <Box marginRight="25px">
        <NavSidebar active="dm" />
      </Box>
      <Stack spacing={8} marginTop="15px" marginRight="15px" width="100%">
        <FindInterface />
        <GroupHeading>
          <Text>Drops</Text>
        </GroupHeading>
        <DropsList />
        <Stack spacing={4} marginTop="15px" direction="row">
          <Stack spacing={4}>
            <GroupHeading>
              <Text>Trending</Text>
            </GroupHeading>
            <Trending />
          </Stack>
          <Stack spacing={4}>
            <GroupHeading>
              <Text>Recommended For You</Text>
            </GroupHeading>
            <Recommended />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
