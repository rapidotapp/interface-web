import { Flex } from '@chakra-ui/core'
import React from 'react'
import { Plus } from 'react-feather'

const AddServerButton = () => {
  return (
    <Flex
      w="60px"
      h="60px"
      bg="red.300"
      marginY="14px"
      borderRadius="30px"
      justify="center"
      align="center"
    >
      <Plus color="#fff" size="40px" />
    </Flex>
  )
}

export default AddServerButton
