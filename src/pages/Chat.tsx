import React from 'react'

import NavSidebar from '../components/organisms/NavSidebar'
import DirectMessages from '../components/organisms/DirectMessages'
import MessageBox from '../components/organisms/MessageBox'
import { Flex } from '@chakra-ui/core'

export default function ChatPage() {
  return (
    <Flex direction="row" width="100%" margin="0">
      <Flex
        bg="#292A2F"
        borderTopRightRadius="45px"
        borderBottomRightRadius="45px"
      >
        <NavSidebar active="chat" />
        <DirectMessages />
      </Flex>
      <MessageBox />
    </Flex>
  )
}
