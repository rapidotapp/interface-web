import React from 'react'
import ThemedComponent from '../components/theme'
import {
  Box,
  Flex,
  Button,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Image,
} from '@chakra-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faPhone,
  faEllipsisV,
  faTint,
} from '@fortawesome/free-solid-svg-icons'

export default { title: 'FriendList' }

/**
 * @typedef userSchema
 * @property {string} Name
 * @property {string} Username
 * @property {string} ImageURL
 * @property {Array<string>} Drops
 */

export const friendItem = (
  /** @type userSchema */ userSchema,
  /** @type boolean */ isOnline
) => {
  return (
    <Flex direction="column">
      <Flex direction="row" align="center" marginBottom="17px">
        <Box height="45px">
          <Image
            size="45px"
            src={userSchema.ImageURL}
            borderRadius="50%"
            cursor="pointer"
          />
          <Flex
            bg={isOnline ? '#67e5ae' : '#000'}
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
            {!isOnline && (
              <Box bg="#242529" w="8px" h="8px" borderRadius="50%"></Box>
            )}
          </Flex>
        </Box>
        <Box marginLeft="20px">
          <Text color="#fff" fontSize="lg">
            {userSchema.Name}
          </Text>
          <Text color="#979797" fontSize="xs">
            {userSchema.Username}
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
              <FontAwesomeIcon icon={faComment} color="#8C8C8D" size="md" />
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
              <FontAwesomeIcon icon={faPhone} color="#8C8C8D" size="md" />
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
              <FontAwesomeIcon icon={faEllipsisV} color="#8C8C8D" size="md" />
            </Flex>
          </Box>
        </Flex>
        <Flex direction="row" marginLeft="auto" align="center">
          <Text color="#979797" marginRight="10px">
            Using
          </Text>
          {userSchema.Drops.map((drop, index) => (
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

export const friendList = () => {
  const onlineUsers = [
    {
      Name: 'Safin',
      Username: 'safinsingh',
      ImageURL:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      Drops: ['Google Translate'],
    },
    {
      Name: 'Safin',
      Username: 'safinsingh',
      ImageURL:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      Drops: ['Google Translate'],
    },
    {
      Name: 'Safin',
      Username: 'safinsingh',
      ImageURL:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      Drops: ['Google Translate'],
    },
    {
      Name: 'Safin',
      Username: 'safinsingh',
      ImageURL:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      Drops: ['Google Translate'],
    },
  ]

  const offlineUsers = [
    {
      Name: 'Safin',
      Username: 'safinsingh',
      ImageURL:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      Drops: ['Google Translate'],
    },
    {
      Name: 'Safin',
      Username: 'safinsingh',
      ImageURL:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      Drops: ['Google Translate'],
    },
    {
      Name: 'Safin',
      Username: 'safinsingh',
      ImageURL:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      Drops: ['Google Translate'],
    },
    {
      Name: 'Safin',
      Username: 'safinsingh',
      ImageURL:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      Drops: ['Google Translate'],
    },
  ]

  return (
    <ThemedComponent>
      <Flex w="100%" bg="#242529" justifyContent="center" direction="column">
        <Flex w="100%" justifyContent="center" alignItems="center">
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
        <Flex w="100%" justifyContent="center">
          <Flex w="92%" direction="column">
            <Flex
              color="#42434A"
              w="100%"
              direction="row"
              alignItems="center"
              marginTop="8px"
              marginBottom="15px"
            >
              <Text>Online</Text>
              <Box marginLeft="15px" w="100%" h="1px" bg="#42434A"></Box>
            </Flex>
            {onlineUsers.map((u) => friendItem(u, true))}
            <Flex
              color="#42434A"
              w="100%"
              direction="row"
              alignItems="center"
              marginTop="8px"
              marginBottom="15px"
            >
              <Text>Offline</Text>
              <Flex marginLeft="15px" w="100%" h="1px" bg="#42434A"></Flex>
            </Flex>
            {offlineUsers.map((u) => friendItem(u, false))}
          </Flex>
        </Flex>
      </Flex>
    </ThemedComponent>
  )
}
