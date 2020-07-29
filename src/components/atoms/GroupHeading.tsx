import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/core'
import { IoIosArrowForward } from 'react-icons/io'

interface IGroupHeading {
  children?: JSX.Element
  [key: string]: any
}

export default function GroupHeading({ children }: IGroupHeading) {
  return (
    <Flex alignItems="center" padding="10px">
      <Text fontWeight="semibold">{children}</Text>
      <Box marginLeft="10px">
        <IoIosArrowForward />
      </Box>
    </Flex>
  )
}
