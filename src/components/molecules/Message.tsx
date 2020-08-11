import { Box, Flex, Image, Text } from '@chakra-ui/core'
import React from 'react'

interface messageProps {
  from: string
  iconURL: string
  time: string
  message: string
}

const Message = (props: messageProps) => {
  return (
    <Flex w="100%" direction="column" marginY="18px">
      <Flex align="center">
        <Image
          src={props.iconURL}
          w="50px"
          h="50px"
          borderRadius="25px"
          marginRight="10px"
        />
        <Box>
          <Flex align="center">
            <Text fontSize="sm" as="b" marginRight="10px">
              {props.from}
            </Text>
            <Text fontSize="xs" color="gray.400">
              {props.time}
            </Text>
          </Flex>
          <Text>{props.message}</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Message
