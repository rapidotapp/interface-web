import React from 'react'
import { Flex, Text, Stack } from '@chakra-ui/core'
import NavSidebar from '../components/NavSidebar'
import FindInterface from '../components/FindInterface'
import DropsList from '../components/DropsList'
import Trending from '../components/Trending'
import Recommended from '../components/Recommended'
import GroupHeading from '../components/atoms/GroupHeading'

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
