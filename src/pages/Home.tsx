import { Flex, Stack, Text } from '@chakra-ui/core'
import React from 'react'

import GroupHeading from '../components/atoms/GroupHeading'
import DropsList from '../components/molecules/DropsList'
import FindInterface from '../components/organisms/FindInterface'
import NavSidebar from '../components/organisms/NavSidebar'
import Recommended from '../components/organisms/Recommended'
import Trending from '../components/organisms/Trending'

export default function Home(): JSX.Element {
  return (
    <Flex>
      <NavSidebar />
      <Flex flexDirection="column" margin="20px">
        <FindInterface />
        <GroupHeading>
          <Text>Drops</Text>
        </GroupHeading>
        <DropsList />
        <Stack spacing={4} direction="row">
          <Flex flexDirection="column">
            <GroupHeading>
              <Text>Trending</Text>
            </GroupHeading>
            <Trending />
          </Flex>
          <Flex flexDirection="column">
            <GroupHeading>
              <Text>Recommended For You</Text>
            </GroupHeading>
            <Recommended />
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  )
}
