import { Flex, PseudoBox } from '@chakra-ui/core'
import React from 'react'
import { Plus } from 'react-feather'

const AddServerButton = () => {
  return (
    <PseudoBox
      bg="red.300"
      marginBottom="14px"
      borderRadius="30px"
      style={{ transition: 'all 0.2s', cursor: 'pointer' }}
      _hover={{ boxShadow: '0px 0px 10px 5px rgba(252, 129, 129, 0.37);' }}
    >
      <Flex w="3.75rem" h="3.75rem" justify="center" align="center">
        <Plus color="#fff" size="2.5rem" />
      </Flex>
    </PseudoBox>
  )
}

export default AddServerButton
