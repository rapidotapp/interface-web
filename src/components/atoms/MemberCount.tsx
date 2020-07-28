import React from 'react'
import { Text, Box, Flex } from '@chakra-ui/core'
import { smallBorderRadius } from './common'

interface IMemberCount {
  children?: React.ReactDOM
  [key: string]: any
}
export default function MemberCount({ children, ...props }: IMemberCount) {
  return (
    <Flex alignItems="center" marginTop="12px" {...props}>
      <Box
        width="10px"
        height="10px"
        borderRadius={smallBorderRadius}
        backgroundColor="#00C1BD"
        marginRight="8px"
      ></Box>
      <Text color="gray.400" fontSize="xs">
        1,245 Members
      </Text>
    </Flex>
  )
}
