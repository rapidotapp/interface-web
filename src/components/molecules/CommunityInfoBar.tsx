import { Flex, PseudoBox, Text } from '@chakra-ui/core'
import React from 'react'
import { Flag, Info, Users } from 'react-feather'

const CommunityInfoBar = (props: any) => {
  return (
    <Flex
      top={0}
      h="90px"
      borderBottom="1px solid #B5B5B5"
      bg="red.50"
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
      <PseudoBox _hover={{ cursor: 'pointer' }}>
        <Info size="20px" color="#FC8181" onClick={props.handleDetail} />
      </PseudoBox>
    </Flex>
  )
}

export default CommunityInfoBar
