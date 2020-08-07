import { Flex } from '@chakra-ui/core'
import React from 'react'

interface circleButtonProps {
  // If you guys could find the exact type for this, please insert it here
  icon: any
  bg: string
}

const CircleButton = (props: circleButtonProps) => {
  return (
    <Flex
      h="60px"
      w="60px"
      bg={props.bg}
      borderRadius="30px"
      justify="center"
      align="center"
    >
      {props.icon}
    </Flex>
  )
}

export default CircleButton
