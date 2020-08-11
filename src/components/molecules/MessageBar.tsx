import { Flex, Input, InputGroup, InputRightAddon } from '@chakra-ui/core'
import React from 'react'
import { Smile } from 'react-feather'

const MessageBar = () => {
  return (
    <Flex
      padding="16px 12px"
      justify="center"
      align="center"
      bg="white"
      h="84px"
      pos="absolute"
      w="50%"
      bottom={0}
    >
      <InputGroup
        bg="#FFE9E9"
        w="100%"
        h="100%"
        borderRadius="5px"
        border="1px solid #FC8181"
        outline="none"
        placeholder="Message #general"
        color="red.300"
      >
        <Input
          bg="#FFE9E9"
          w="100%"
          h="100%"
          placeholder="Message #general"
          color="red.300"
        ></Input>
        <InputRightAddon
          bg="red.300"
          children={<Smile color="white" />}
          h="100%"
        />
      </InputGroup>
    </Flex>
  )
}

export default MessageBar
