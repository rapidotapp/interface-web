import { Flex } from '@chakra-ui/core'
import React from 'react'

import WordWithLine from '../atoms/WordWithLine'
import FriendItem from '../molecules/FriendItem'
import FriendSearchBar from '../molecules/FriendSearchBar'
import ThemeX from '../theme'

const FriendList = () => {
  const onlineUsers = [
    {
      name: 'Safin',
      username: 'safinsingh',
      imageURL:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      drops: ['Google Translate'],
    },
    {
      name: 'Safin',
      username: 'safinsingh',
      imageURL:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      drops: ['Google Translate'],
    },
  ]

  const offlineUsers = [
    {
      name: 'Safin',
      username: 'safinsingh',
      imageURL:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      drops: ['Google Translate'],
    },
    {
      name: 'Safin',
      username: 'safinsingh',
      imageURL:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      drops: ['Google Translate'],
    },
  ]

  return (
    <ThemeX>
      <FriendSearchBar />
      <Flex w="100%" bg="#242529" justifyContent="center" direction="column">
        <Flex w="100%" justifyContent="center">
          <Flex w="92%" direction="column">
            <WordWithLine title="Online" />
            {onlineUsers.map((u, index) => (
              <FriendItem userSchema={u} isOnline={true} key={index} />
            ))}
            <WordWithLine title="Offline" />
            {offlineUsers.map((u, index) => (
              <FriendItem userSchema={u} isOnline={false} key={index} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </ThemeX>
  )
}

export default FriendList
