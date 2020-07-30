import { Button } from '@chakra-ui/core'
import React from 'react'

import { stdLightGrey } from '../common'

interface friendSearchBarButtonProps {
  name: string
  isActive: boolean
}

const FriendSearchBarButton = (props: friendSearchBarButtonProps) => {
  return (
    <Button
      variantColor="black"
      bg={props.isActive ? '#42434A' : 'transparent'}
      color={stdLightGrey}
      size="md"
      borderRadius="20px"
      paddingX="35px"
      fontWeight="400"
      _hover={{
        bg: '#42434A',
      }}
    >
      {props.name}
    </Button>
  )
}

export default FriendSearchBarButton
