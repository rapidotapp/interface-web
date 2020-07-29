import { Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'
import ThemedComponent from '../components/theme'
import { friendItem } from './molecules/FriendItem.stories'
import { friendSearchBar } from './molecules/FriendSearchBar.stories'
export default { title: 'FriendList' }

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
      {() => friendSearchBar}
      <Flex w="100%" bg="#242529" justifyContent="center" direction="column">
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
