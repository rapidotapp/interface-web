import { Flex, PseudoBox } from '@chakra-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

interface circleButtonProps {
  // If you guys could find the exact type for this, please insert it here
  icon: any
  bg: string
  link: string
}

const CircleButton = (props: circleButtonProps) => {
  return (
    <Link to={props.link}>
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
    </Link>
  )
}

export default CircleButton
