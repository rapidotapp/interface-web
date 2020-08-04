import { Box, Divider, Flex, Text } from '@chakra-ui/core'
import { faEllipsisV, faTint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import IconCall from '~atoms/IconCall'
import IconMessage from '~atoms/IconMessage'
import UserAvatar from '~atoms/UserAvatar'

import { stdLightGrey } from '../common'

interface userSchema {
  name: string
  username: string
  imageURL: string
  drops: Array<string>
}

interface friendItemProps {
  userSchema: userSchema
  isOnline: boolean
  index: number
  len: number
}

const FriendItem = (props: friendItemProps) => {
  return (
    <Flex direction="column">
      <Flex direction="row" align="center" marginBottom="17px">
        <UserAvatar
          avatarURL={props.userSchema.imageURL}
          onlineStatus={props.isOnline ? 'online' : 'offline'}
        />
        <Box marginLeft="20px">
          <Text color="#fff" fontSize="lg">
            {props.userSchema.name}
          </Text>
          <Text color={stdLightGrey} fontSize="xs">
            {props.userSchema.username}
          </Text>
        </Box>
        <Flex marginLeft="35px" width="150px" justify="space-between">
          <IconMessage />
          <IconCall />
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
              <FontAwesomeIcon icon={faEllipsisV} color="#8C8C8D" />
            </Flex>
          </Box>
        </Flex>
        <Flex direction="row" marginLeft="auto" align="center">
          <Text color={stdLightGrey} marginRight="10px">
            Using
          </Text>
          {props.userSchema.drops.map((drop, index) => (
            <Flex
              bg="#28292E"
              paddingY="8px"
              paddingX="12px"
              borderRadius="20px"
              boxShadow="0px 0px 10px #212226"
              align="center"
              key={index}
            >
              <FontAwesomeIcon icon={faTint} color="#4BB9BD" />
              <Text color="#fff" marginLeft="10px">
                {drop}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      {props.index !== props.len - 1 ? <Divider /> : null}
    </Flex>
  )
}

export default FriendItem
