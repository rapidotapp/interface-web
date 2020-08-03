import React from 'react'
import { Flex, Text, Box, Image, Stack } from '@chakra-ui/core'
import { stdLightGrey } from '../common'

import SearchBar from '../atoms/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faVideo,
  faUserPlus,
  faMapPin,
} from '@fortawesome/free-solid-svg-icons'

const MessageBox = () => {
  return (
    <Flex w="100%" h="100%" padding="30px">
      <Flex w="100%" h="100px" align="center" direction="row">
        <Box height="65px">
          <Image
            size="65px"
            src="https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg"
            borderRadius="50%"
            cursor="pointer"
          />
          <Flex
            bg={true ? '#67e5ae' : '#000'}
            w="20px"
            h="20px"
            position="relative"
            bottom="20px"
            left="50px"
            borderRadius="50%"
            margin="0px"
            padding="0px"
            border="1px solid black"
            align="center"
            justify="center"
          >
            {true && (
              <Box bg="#242529" w="8px" h="8px" borderRadius="50%"></Box>
            )}
          </Flex>
        </Box>
        <Flex
          marginLeft="20px"
          h="100%"
          direction="column"
          justifyContent="center"
        >
          <Text color="#fff" fontSize="3xl">
            Safin
          </Text>
          <Text color={stdLightGrey} fontSize="sm">
            @safinsingh
          </Text>
        </Flex>
        <Flex
          bg="#292A2F"
          ml="auto"
          borderRadius="30px"
          boxShadow="0px 0px 10px #151618"
          h="60px"
          w="600px"
          direction="row"
          justify="center"
          align="center"
        >
          <Stack spacing={4} direction="row">
            <FontAwesomeIcon icon={faPhone} color="#42434A" size="2x" />
            <FontAwesomeIcon icon={faVideo} color="#42434A" size="2x" />
            <FontAwesomeIcon icon={faUserPlus} color="#42434A" size="2x" />
            <FontAwesomeIcon icon={faMapPin} color="#42434A" size="2x" />
          </Stack>
          <SearchBar width="300px" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MessageBox
