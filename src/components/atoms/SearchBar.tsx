import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/core'
import React from 'react'

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <Icon name="search" color="#979797" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search"
        variant="filled"
        bg="#42434A"
        _hover={{
          bg: '#42434A',
        }}
        color="#979797"
        fontSize="16px"
        w="400px"
        h="40px"
        borderRadius="20px"
      />
    </InputGroup>
  )
}

export default SearchBar
