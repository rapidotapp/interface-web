import { Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'

import { dms, groupDms } from '../../util/dummyData'
import SearchBar from '../atoms/SearchBar'
import WordWithLine from '../atoms/WordWithLine'
import GroupDmCard from '../molecules/GroupDmCard'
import UserDmCard from '../molecules/UserDmCard'
import Sidebar from './NavSidebar'

const DirectMessages = () => {
  return (
    <Flex
      w="500px"
      bg="#292A2F"
      borderTopRightRadius="45px"
      borderBottomRightRadius="45px"
      direction="row"
    >
      <Sidebar />
      <Flex w="100%" justifyContent="center" direction="row">
        <Flex w="85%" paddingY="30px" direction="column">
          <Text fontSize="25px" color="white">
            Direct Messages
          </Text>
          <Box paddingY="10px">
            <SearchBar />
          </Box>
          <WordWithLine color="#707070" title="Pinned conversations" />
          {dms
            .filter((dm) => {
              if (dm.isPinned) {
                return dm
              }
            })
            .map((dm, index) => (
              <UserDmCard dm={dm} key={index} />
            ))}
          {groupDms
            .filter((groupDm) => {
              if (groupDm.isPinned) {
                return groupDm
              }
            })
            .map((groupDm, index) => (
              <GroupDmCard groupDm={groupDm} key={index} />
            ))}
          <WordWithLine color="#707070" title="All conversations" />
          {dms
            .filter((dm) => {
              if (!dm.isPinned) {
                return dm
              }
            })
            .map((dm, index) => (
              <UserDmCard dm={dm} key={index} />
            ))}
          {groupDms
            .filter((groupDm) => {
              if (!groupDm.isPinned) {
                return groupDm
              }
            })
            .map((groupDm, index) => (
              <GroupDmCard groupDm={groupDm} key={index} />
            ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DirectMessages
