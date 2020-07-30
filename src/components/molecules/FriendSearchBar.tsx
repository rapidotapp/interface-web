import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/core'
import React from 'react'

const FriendSearchBar = () => {
  return (
    <Flex w="100%" justifyContent="center" alignItems="center" bg="#242529">
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        w="95%"
        marginY="20px"
        h="70px"
        borderRadius="35px"
        bg="#242529"
        boxShadow="0px 0px 25px #151618"
        paddingX="30px"
      >
        <Flex direction="row" justifyContent="space-between" width="500px">
          <Button
            variantColor="black"
            bg="#42434A"
            color="#979797"
            size="md"
            borderRadius="20px"
            paddingX="35px"
            fontWeight="400"
          >
            All
          </Button>
          <Button
            variantColor="black"
            bg="transparent"
            color="#979797"
            size="md"
            borderRadius="20px"
            paddingX="35px"
            fontWeight="400"
            _hover={{
              bg: '#42434A',
            }}
          >
            Requests
          </Button>
          <Button
            variantColor="black"
            bg="transparent"
            color="#979797"
            size="md"
            borderRadius="20px"
            paddingX="35px"
            fontWeight="400"
            _hover={{
              bg: '#42434A',
            }}
          >
            Blocked
          </Button>
        </Flex>
        <Box w="2px" h="60%" bg="#42434A"></Box>
        <Flex>
          <InputGroup>
            <InputLeftElement>
              <Icon name="search" color="#979797" />
            </InputLeftElement>
            <Input
              type="phone"
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
        </Flex>
      </Flex>
    </Flex>
  )
}

export default FriendSearchBar
