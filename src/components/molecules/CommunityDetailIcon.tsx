import { Flex, Text } from '@chakra-ui/core'
import React from 'react'

interface communityDetailIconProps {
  icon: any
  text: string
}

const CommunityDetailIcon = (props: communityDetailIconProps) => {
  return (
    <Flex justify="center" align="center" direction="column">
      <Flex
        h="40px"
        w="40px"
        align="center"
        justify="center"
        bg="red.300"
        borderRadius="20px"
      >
        {props.icon}
      </Flex>
      <Text as="b" fontSize="sm" color="red.300">
        {props.text}
      </Text>
    </Flex>
  )
}

export default CommunityDetailIcon
