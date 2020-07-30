import { Box, Flex, Image, Tag, Text } from '@chakra-ui/core'
import React from 'react'

import { stdLightGrey } from '../common'

interface userDmCardProps {
  dm: {
    online: boolean
    name: string
    username: string
    unread: string
    pfp: string
  }
}

const UserDmCard = (props: userDmCardProps) => {
  return (
    <Flex direction="row" w="100%" alignItems="center" marginY="6px">
      <Box height="45px">
        <Image
          size="45px"
          src={props.dm.pfp}
          borderRadius="50%"
          cursor="pointer"
        />
        <Flex
          bg={props.dm.online ? '#67e5ae' : '#000'}
          w="16px"
          h="16px"
          position="relative"
          bottom="15px"
          left="30px"
          borderRadius="50%"
          margin="0px"
          padding="0px"
          border="1px solid black"
          align="center"
          justify="center"
        >
          {!props.dm.online && (
            <Box bg="#242529" w="8px" h="8px" borderRadius="50%"></Box>
          )}
        </Flex>
      </Box>
      <Box marginLeft="20px">
        <Text color="#fff" fontSize="lg">
          {props.dm.name}
        </Text>
        <Text color={stdLightGrey} fontSize="xs">
          {props.dm.username}
        </Text>
      </Box>
      <Tag
        size="sm"
        variant="solid"
        bg="#5280E2"
        borderRadius="20px"
        marginLeft="auto"
        fontSize="12px"
        h="15px"
      >
        {props.dm.unread}
      </Tag>
    </Flex>
  )
}

export default UserDmCard
