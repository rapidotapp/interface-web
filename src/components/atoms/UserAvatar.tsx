import { Box, Flex, Image } from '@chakra-ui/core'
import React from 'react'

interface userAvatarProps {
  avatarURL: string
  onlineStatus: 'online' | 'offline'
}
export default function UserAvatar(props: userAvatarProps) {
  let onlineStatusBackgroundIndicator: null | string = null
  switch (props.onlineStatus) {
    case 'online':
      onlineStatusBackgroundIndicator = '#67e5ae'
      break
    case 'offline':
      onlineStatusBackgroundIndicator = 'white'
      break
    default:
      break
  }

  return (
    <Box height="45px">
      <Image
        size="45px"
        src={props.avatarURL}
        borderRadius="50%"
        cursor="pointer"
      />
      <Flex
        bg={onlineStatusBackgroundIndicator}
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
        {props.onlineStatus === 'offline' && (
          <Box bg="#242529" w="8px" h="8px" borderRadius="50%"></Box>
        )}
      </Flex>
    </Box>
  )
}
