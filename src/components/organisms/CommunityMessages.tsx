import { Box, Flex } from '@chakra-ui/core'
import React, { useState } from 'react'

import CommunityInfoBar from '~molecules/CommunityInfoBar'
import Message from '~molecules/Message'
import MessageBar from '~molecules/MessageBar'

interface message {
  iconURL: string
  from: string
  time: string
  message: string
  replies: number
  replyIcon: string
}

const CommunityMessages = (props: any) => {
  const iconURL =
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'

  const [messages, setMessages] = useState<message[]>([
    {
      iconURL: iconURL,
      from: 'safinsingh',
      time: '9:10',
      message: `\`import React from 'react'\` should do the trick.
\`\`\`js
console.log('hello from rapid!')
\`\`\``,
      replies: 2,
      replyIcon: iconURL,
    },
  ])

  const addMessage = (msg: string) => {
    setMessages([
      {
        iconURL: iconURL,
        from: 'safinsingh',
        time: new Date().toISOString(),
        message: msg,
        replies: 0,
        replyIcon: iconURL,
      },
      ...messages,
    ])
  }

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
      >
        {messages.map((el, index) => (
          <Message
            iconURL={el.iconURL}
            from={el.from}
            time={el.time}
            message={el.message}
            key={index}
            replies={el.replies}
            replyIcon={el.replyIcon}
          />
        ))}
      </Flex>
      <MessageBar onSubmit={addMessage} />
    </Box>
  )
}

export default CommunityMessages
