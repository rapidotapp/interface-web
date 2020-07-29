import { Stack, Text } from '@chakra-ui/core'
import React from 'react'

import GroupHeading from '../components/atoms/GroupHeading'
import DropsList from '../components/molecules/DropsList'
import DisplayNavAndPage from '../components/organisms/DisplayNavAndPage'
import FindInterface from '../components/organisms/FindInterface'
import Recommended from '../components/organisms/Recommended'
import Trending from '../components/organisms/Trending'

export default function Home(): JSX.Element {
  return (
    <DisplayNavAndPage>
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
    </DisplayNavAndPage>
  )
}
