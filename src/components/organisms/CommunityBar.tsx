import { Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { Camera, Hash, Inbox, MessageSquare, Mic, Plus } from 'react-feather'

import ActiveIcon from '../atoms/ActiveIcon'
import CommunityBarDivider from '../atoms/CommunityBarDivider'
import Channel from '../molecules/Channel'
import CommunityBarSectionHeader from '../molecules/CommunityBarSectionHeader'

const CommunityBar = () => {
  const communityBG =
    'url("https://images.unsplash.com/photo-1596698867859-a27795736d7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")'
  return (
    <Flex w="224px" h="100vh" bgImage={communityBG} direction="column">
      <Flex direction="column" padding="16px" color="white">
        <Text fontSize="4xl">art hangout</Text>
        <Text fontSize="lg">artists, designers, graphics</Text>
      </Flex>
      <Flex direction="column" color="red.300">
        <Flex direction="row" align="center" p="12px 16px" bg="white">
          <ActiveIcon />
          <Flex direction="column" marginLeft="15px">
            <Text fontSize="xs">signed in as</Text>
            <Text fontSize="lg" as="b">
              safin
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" w="100%">
          <Channel
            name="Threads"
            active={false}
            unread={false}
            mentions={0}
            icon={<MessageSquare color="#FC8181" size="12px" />}
            padding="7px 12px"
          />
          <Channel
            name="Unread"
            active={false}
            unread={false}
            mentions={0}
            icon={<Inbox color="#FC8181" size="12px" />}
            padding="7px 12px"
          />
          <Channel
            name="Create"
            active={false}
            unread={false}
            mentions={0}
            icon={<Plus color="#FC8181" size="12px" />}
            padding="7px 12px"
          />
        </Flex>
        <Box>
          <CommunityBarDivider />
          <CommunityBarSectionHeader title="Chat Streams" color="red.300" />
          <Channel
            name="welcome"
            active={false}
            unread={true}
            mentions={0}
            icon={<Hash color="#FC8181" size="12px" />}
            padding="16px 12px"
          />
          <Channel
            name="general"
            active={true}
            unread={false}
            mentions={3}
            icon={<Hash color="#fff" size="12px" />}
            padding="16px 12px"
          />
          <Channel
            name="welcome"
            active={false}
            unread={false}
            mentions={0}
            icon={<Hash color="#FC8181" size="12px" />}
            padding="16px 12px"
          />
        </Box>
        <Box>
          <CommunityBarDivider />
          <CommunityBarSectionHeader title="Post Streams" color="#fff" />
          <Channel
            name="execs"
            active={false}
            unread={true}
            mentions={0}
            icon={<Mic color="#FC8181" size="12px" />}
            padding="16px 12px"
          />
          <Channel
            name="games"
            active={false}
            unread={false}
            mentions={0}
            icon={<Camera color="#FC8181" size="12px" />}
            padding="16px 12px"
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default CommunityBar
