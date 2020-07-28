import React from 'react'
import { Text, Box, Flex } from '@chakra-ui/core'
import { smallBorderRadius } from './common'
import * as util from '../../util'

interface IMemberCount {
  children?: React.ReactDOM
  totalMembers: string | number
  [key: string]: any
}
export default function MemberCount({
  children,
  totalMembers,
  ...props
}: IMemberCount) {
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
        {util.formatNumber(totalMembers)} Members
      </Text>
    </Flex>
  )
}
