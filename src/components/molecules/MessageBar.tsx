import { Flex, Input, InputGroup, InputRightAddon } from '@chakra-ui/core'
import React, { useState } from 'react'
import { Smile } from 'react-feather'

const MessageBar = () => {
  const [message, setMessage] = useState('')

  return (
    <Flex
      padding="16px 12px"
      justify="center"
      align="center"
      bg="red.50"
      h="84px"
      bottom={0}
    >
      <InputGroup
        bg="red.100"
        w="100%"
        h="100%"
        borderRadius="5px"
        border="1px solid #FC8181"
        outline="none"
        placeholder="Message #general"
        color="red.300"
      >
        <Input
          bg="red.100"
          w="100%"
          h="100%"
          placeholder="Message #general"
          color="red.300"
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
        ></Input>
        <InputRightAddon bg="red.300" h="100%">
          <Smile color="white" />
        </InputRightAddon>
      </InputGroup>
    </Flex>
  )
}

export default MessageBar
