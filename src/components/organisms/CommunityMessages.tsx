import { Box, Flex } from '@chakra-ui/core'
import React from 'react'

import CommunityInfoBar from '~molecules/CommunityInfoBar'
import Message from '~molecules/Message'
import MessageBar from '~molecules/MessageBar'

const CommunityMessages = (props: any) => {
  const iconURL =
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'

  return (
    <Box w="100%">
      <CommunityInfoBar handleDetail={props.handleDetail} />
      <Flex
        w="100%"
        h="calc(100vh - 174px)"
        padding="10px 40px"
        direction="column-reverse"
        overflow="scroll"
        overflowX="hidden"
        justify="center"
        align="center"
      >
        {[...Array(15)].map((index) => (
          <Message
            iconURL={iconURL}
            from="safinsingh"
            time="9:10"
            message="hello world! welcome to rapid!"
            key={index}
            replies={2}
            replyIcon={iconURL}
          />
        ))}
      </Flex>
      <MessageBar />
    </Box>
  )
}

export default CommunityMessages
