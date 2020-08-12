import { Flex, PseudoBox } from '@chakra-ui/core'
import React from 'react'

interface circleButtonProps {
  // If you guys could find the exact type for this, please insert it here
  icon: any
  bg: string
}

const CircleButton = (props: circleButtonProps) => {
  return (
    <PseudoBox
      bg={props.bg}
      borderRadius="30px"
      style={{
        transition: 'all 0.3s',
        cursor: 'pointer',
      }}
      _hover={props.bg !== 'red.300' ? { backgroundColor: '#FED7D7' } : {}}
    >
      <Flex
        h="3.75rem"
        w="3.75rem"
        bg="transparent"
        justify="center"
        align="center"
      >
        {props.icon}
      </Flex>
    </PseudoBox>
  )
}

export default CircleButton
