import React from 'react'
import { Text, Stack } from '@chakra-ui/core'
import NavSidebar from '../components/organisms/NavSidebar'
import FindInterface from '../components/organisms/FindInterface'
import DropsList from '../components/molecules/DropsList'
import Trending from '../components/organisms/Trending'
import Recommended from '../components/organisms/Recommended'
import GroupHeading from '../components/atoms/GroupHeading'

export default function Home(): JSX.Element {
  return (
    <Stack spacing={4} direction="row">
      <NavSidebar />
      <Stack spacing={4} margin="20px">
        <FindInterface />
        <GroupHeading>
          <Text>Drops</Text>
        </GroupHeading>
        <DropsList />
        <Stack spacing={4} direction="row">
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
