import { Box, Flex } from '@chakra-ui/core'
import React from 'react'

import FriendSearchBarButton from '~atoms/FriendSearchBarButton'
import SearchBar from '~atoms/SearchBar'

const FriendSearchBar = () => {
  return (
    <Flex w="100%" justifyContent="center" alignItems="center">
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        w="95%"
        marginY="20px"
        h="70px"
        borderRadius="35px"
        boxShadow="0px 0px 25px #151618"
        paddingX="30px"
      >
        <Flex direction="row" justifyContent="space-between" width="500px">
          <FriendSearchBarButton name="All" isActive={true} />
          <FriendSearchBarButton name="Requests" isActive={false} />
          <FriendSearchBarButton name="Blocked" isActive={false} />
        </Flex>
        {/* TODO: dividor component */}
        <Box w="2px" h="60%" bg="#42434A"></Box>
        <SearchBar width="400px" />
      </Flex>
    </Flex>
  )
}

export default FriendSearchBar
