import { Box, Collapse, Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { Camera, Hash, Inbox, MessageSquare, Mic, Plus } from 'react-feather'

import ActiveIcon from '../atoms/ActiveIcon'
import CommunityBarDivider from '../atoms/CommunityBarDivider'
import Channel from '../molecules/Channel'
import CommunityBarSectionHeader from '../molecules/CommunityBarSectionHeader'

const CommunityBar = () => {
  const [show1, setShow1] = React.useState(false)
  const [show2, setShow2] = React.useState(false)
  const [show3, setShow3] = React.useState(false)
  const handleToggle1 = () => setShow1(!show1)
  const handleToggle2 = () => setShow2(!show2)
  const handleToggle3 = () => setShow3(!show3)

  const communityBG =
    'url("https://images.unsplash.com/photo-1596698867859-a27795736d7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")'
  return (
    <Flex
      w="224px"
      h="100vh"
      bgImage={communityBG}
      direction="column"
      border="1px solid #B5B5B5"
    >
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
          <CommunityBarSectionHeader
            title="Chat Streams"
            color="red.300"
            onClick={handleToggle1}
          />
          <Collapse isOpen={show1}>
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
          </Collapse>
        </Box>
        <Box>
          <CommunityBarDivider />
          <CommunityBarSectionHeader
            title="Post Streams"
            color="red.300"
            onClick={handleToggle2}
          />
          <Collapse isOpen={show2}>
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
          </Collapse>
        </Box>
        <Box>
          <CommunityBarDivider />
          <CommunityBarSectionHeader
            title="AV Streams"
            color="red.300"
            onClick={handleToggle3}
          />
          <Collapse isOpen={show3}>
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
          </Collapse>
        </Box>
      </Flex>
    </Flex>
  )
}

export default CommunityBar
