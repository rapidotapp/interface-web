import React from 'react'
import { Flex } from '@chakra-ui/core'
import NavSidebar from '../components/NavSidebar'
import FindInterface from '../components/FindInterface'
import DropsList from '../components/DropsList'
import Trending from '../components/Trending'
import Recommended from '../components/Recommended'

export default function Home(): JSX.Element {
  return (
    <Flex>
      <NavSidebar />
      <Flex flexDirection="column">
        <FindInterface />
        <DropsList />
        <Trending />
        <Recommended />
      </Flex>
    </Flex>
  )
}
