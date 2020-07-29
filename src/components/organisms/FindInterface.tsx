// import PropTypes from 'prop-types'
import { Flex, Heading, Icon, Input, Text } from '@chakra-ui/core'
import React from 'react'

import { commonShadow } from '../common'

const bigBorder = '35px'
const maxBorder = '50px'

// Item.propTypes = {
//   icon: PropTypes.string.isRequired,
// }

function Item({ children, ...props }: any) {
  return (
    <Flex alignItems="center" margin="7px 25px 7px 20px">
      <Icon color="gray.400" name={props.icon} marginRight="30px"></Icon>
      <Text color="gray.400" fontSize="sm">
        {children}
      </Text>
    </Flex>
  )
}

export default function FindInterface() {
  return (
    <Flex width="100%" backgroundColor="#292A2F" borderRadius={bigBorder}>
      <Flex
        flexDirection="column"
        backgroundColor="#292A2F"
        boxShadow={commonShadow}
        padding="15px"
        borderRadius={bigBorder}
      >
        <Item icon="check">Education</Item>
        <Item icon="check">Gaming</Item>
        <Item icon="check">Movies & TV</Item>
        <Item icon="check">Music</Item>
        <Item icon="check">Politics</Item>
        <Item icon="check">Sports</Item>
        <Item icon="check">Technology</Item>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        margin="30px"
      >
        <Flex margin="25px" alignItems="center">
          <Heading as="h3" size="lg" fontWeight="semibold">
            Find new
          </Heading>
          <Flex
            marginLeft="20px"
            backgroundColor="#42434A"
            borderRadius={maxBorder}
          >
            <Flex
              alignItems="center"
              background="linear-gradient(-90deg, rgba(64,90,208,1) 0%, rgba(73,173,191,1) 100%)"
              padding="5px 15px"
              borderRadius={maxBorder}
            >
              <Icon color="gray.100" name="phone" paddingRight="8px"></Icon>
              <Text fontSize="xl" fontWeight="semibold">
                Drops
              </Text>
            </Flex>
            <Text
              fontSize="xl"
              color="gray.500"
              padding="5px 15px"
              fontWeight="semibold"
            >
              Communities
            </Text>
          </Flex>
        </Flex>
        <Input
          backgroundColor="white"
          color="black"
          borderRadius={maxBorder}
          placeholder="Basic usage"
        />
      </Flex>
    </Flex>
  )
}
