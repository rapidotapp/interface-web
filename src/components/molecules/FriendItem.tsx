import { Box, Flex, Image, Text } from '@chakra-ui/core'
import {
  faComment,
  faEllipsisV,
  faPhone,
  faTint,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface userSchema {
  name: string
  username: string
  imageURL: string
  drops: Array<string>
}

interface friendItemProps {
  userSchema: userSchema
  isOnline: boolean
}

const FriendItem = (props: friendItemProps) => {
  return (
    <Flex direction="column">
      <Flex direction="row" align="center" marginBottom="17px">
        <Box height="45px">
          <Image
            size="45px"
            src={props.userSchema.imageURL}
            borderRadius="50%"
            cursor="pointer"
          />
          <Flex
            bg={props.isOnline ? '#67e5ae' : '#000'}
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
            {!props.isOnline && (
              <Box bg="#242529" w="8px" h="8px" borderRadius="50%"></Box>
            )}
          </Flex>
        </Box>
        <Box marginLeft="20px">
          <Text color="#fff" fontSize="lg">
            {props.userSchema.name}
          </Text>
          <Text color="#979797" fontSize="xs">
            {props.userSchema.username}
          </Text>
        </Box>
        <Flex marginLeft="35px" width="150px" justify="space-between">
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
              <FontAwesomeIcon icon={faComment} color="#8C8C8D" />
            </Flex>
          </Box>
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
          <Text color="#979797" marginRight="10px">
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
      <Box w="100%" h="1px" bg="#42434A" marginBottom="10px"></Box>
    </Flex>
  )
}

export default FriendItem
