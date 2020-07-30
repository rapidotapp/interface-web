import { Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'

import * as util from '../../util'
import { smallBorderRadius } from '../common'

interface memberCountProps {
  totalMembers: string | number
  [key: string]: any
}
export default function MemberCount({
  totalMembers,
  ...props
}: memberCountProps) {
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
