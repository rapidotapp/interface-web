import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/core'
import { ArrowRight } from 'react-feather'

interface IGroupHeading {
  children?: JSX.Element
  [key: string]: any
}

export default function GroupHeading({ children }: IGroupHeading) {
  console.log(children)
  return (
    <Flex alignItems="center" padding="10px">
      <Text fontWeight="semibold">{children}</Text>
      <Box marginLeft="10px">
        <ArrowRight />
      </Box>
    </Flex>
  )
}
