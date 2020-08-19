import { Flex, Image, PseudoBox } from '@chakra-ui/core'
import React from 'react'

interface serverIconProps {
  iconURL: string
  active: boolean
}

const ServerIcon = (props: serverIconProps) => {
  return (
    <PseudoBox
      boxShadow={
        props.active ? '0px 0px 20px 5px rgba(252, 129, 129, 0.37);' : ''
      }
      style={{
        transition: 'all 0.2s',
        cursor: 'pointer',
      }}
      _hover={
        !props.active
          ? {
              boxShadow: '0px 0px 10px 5px rgba(252, 129, 129, 0.37);',
            }
          : {}
      }
      borderRadius="30px"
      marginY="14px"
    >
      <Flex w="3.75rem" h="3.75rem" borderRadius="30px">
        <Image src={props.iconURL} borderRadius="30px" w="100%" h="100%" />
      </Flex>
    </PseudoBox>
  )
}

export default ServerIcon
