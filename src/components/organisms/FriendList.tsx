import { Flex } from '@chakra-ui/core'
import React from 'react'
import { offlineUsers, onlineUsers } from '../../util/dummyData'
import WordWithLine from '../atoms/WordWithLine'
import FriendItem from '../molecules/FriendItem'
import FriendSearchBar from '../molecules/FriendSearchBar'
import ThemeX from '../theme'

const FriendList = () => {
  return (
    <ThemeX>
      <FriendSearchBar />
      <Flex w="100%" bg="#242529" justifyContent="center" direction="column">
        <Flex w="100%" justifyContent="center">
          <Flex w="92%" direction="column">
            <WordWithLine title="Online" color="#979797" />
            {onlineUsers.map((u, index) => (
              <FriendItem
                userSchema={u}
                isOnline={true}
                key={index}
                index={index}
                len={onlineUsers.length}
              />
            ))}
            <WordWithLine title="Offline" color="#979797" />
            {offlineUsers.map((u, index) => (
              <FriendItem
                userSchema={u}
                isOnline={false}
                key={index}
                index={index}
                len={offlineUsers.length}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </ThemeX>
  )
}

export default FriendList
