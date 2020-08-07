import { Flex } from '@chakra-ui/core'
import React from 'react'

interface navTabProps {
  icon: any
  bg: string
}

const NavTab = (props: navTabProps) => {
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

export default NavTab
