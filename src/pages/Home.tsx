import React from 'react'
import { Text, Stack, Box } from '@chakra-ui/core'
import NavSidebar from '../components/organisms/NavSidebar'
import FindInterface from '../components/organisms/FindInterface'
import DropsList from '../components/molecules/DropsList'
import Trending from '../components/organisms/Trending'
import Recommended from '../components/organisms/Recommended'
import GroupHeading from '../components/atoms/GroupHeading'

export default function Home(): JSX.Element {
  return (
    <Stack spacing={4} direction="row" width="100%">
      <Box marginRight="25px">
        <NavSidebar />
      </Box>
      <Stack spacing={8} marginTop="15px" width="100%">
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
