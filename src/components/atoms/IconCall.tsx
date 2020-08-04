import { Box, Flex } from '@chakra-ui/core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function IconCall() {
  return (
    <Box>
      <Flex
        bg="#2a2b30"
        boxShadow="0px 0px 25px #151618"
        padding="8px"
        h="35px"
        w="35px"
        borderRadius="50%"
        align="center"
        justify="center"
      >
        <FontAwesomeIcon icon={faPhone} color="#8C8C8D" />
      </Flex>
    </Box>
  )
}