import { Flex } from '@chakra-ui/core'
import React from 'react'

import CommunityInfoBar from '~molecules/CommunityInfoBar'
import Message from '~molecules/Message'
import MessageBar from '~molecules/MessageBar'

const CommunityMessages = () => {
  const iconURL =
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'

  return (
    <>
      <CommunityInfoBar />
      <Flex w="100%" h="100vh" padding="10px 40px" direction="column">
        {[...Array(10)].map((index) => (
          <Message
            iconURL={iconURL}
            from="safinsingh"
            time="9:10"
            message="hello world! welcome to rapid!"
            key={index}
          />
        ))}
        <MessageBar />
      </Flex>
    </>
  )
}

export default CommunityMessages
