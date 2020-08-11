import { Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { Flag, Info, Users } from 'react-feather'

const CommunityInfoBar = () => {
  return (
    <Flex
      pos="absolute"
      top={0}
      h="90px"
      border="1px solid #B5B5B5"
      w="54.5%"
      bg="white"
      justify="space-between"
      align="center"
      padding="0px 40px"
    >
      <Flex direction="column">
        <Text color="red.300" fontSize="lg">
          #general
        </Text>
        <Flex>
          <Flex align="center">
            <Users color="#FEB2B2" size="18px" />
            <Text color="red.200" marginLeft="5px">
              50 |
            </Text>
          </Flex>
          <Flex align="center" marginLeft="5px">
            <Flag color="#FEB2B2" size="18px" />
            <Text color="red.200" marginLeft="5px">
              5 |
            </Text>
          </Flex>
          <Flex align="center">
            <Text color="red.200" marginLeft="5px">
              Random work announcements. Feel free to chill out here!
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Info size="20px" color="#FC8181" />
    </Flex>
  )
}

export default CommunityInfoBar
