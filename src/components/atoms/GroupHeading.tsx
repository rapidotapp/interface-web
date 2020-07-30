import { Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface groupHeadingProps {
  children: React.ReactNode
}

export default function GroupHeading({ children }: groupHeadingProps) {
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
