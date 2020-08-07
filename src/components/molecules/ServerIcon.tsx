import { Flex, Image } from '@chakra-ui/core'
import React from 'react'

interface serverIconProps {
  iconURL: string
  active: boolean
}

const ServerIcon = (props: serverIconProps) => {
  return (
    <Flex
      w="60px"
      h="60px"
      borderRadius="30px"
      border={props.active ? '5px solid #FC8181' : '1px solid #E0E0E0'}
      marginY="14px"
      boxShadow={
        props.active ? '0px 0px 20px 5px rgba(252, 129, 129, 0.37);' : ''
      }
    >
      <Image src={props.iconURL} borderRadius="30px" w="100%" h="100%" />
    </Flex>
  )
}

export default ServerIcon
