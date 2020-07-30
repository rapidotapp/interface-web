import { Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface IGroupHeading {
  children?: JSX.Element | string
  [key: string]: any
}

export default function GroupHeading({ children }: IGroupHeading) {
  return (
    <Flex alignItems="center" padding="10px">
      <Text fontWeight="semibold" fontSize="lg">
        {children}
      </Text>
      <Box marginLeft="10px">
        <IoIosArrowForward />
      </Box>
    </Flex>
  )
}
