import { Flex, PseudoBox, Text } from '@chakra-ui/core'
import React from 'react'

import ActiveIcon from '../atoms/ActiveIcon'

interface channelProps {
  name: string
  active: boolean
  mentions: number
  icon: any
  padding: string
  unread: boolean
}

const Channel = (props: channelProps) => {
  return (
    <PseudoBox
      bg={props.active ? 'red.300' : 'white'}
      _hover={!props.active ? { backgroundColor: '#FFF5F5 !important' } : {}}
      style={{ cursor: 'pointer' }}
    >
      <Flex
        direction="row"
        align="center"
        bg="transparent"
        boxShadow={props.active ? '0px 0px 5px #FC8181' : ''}
        padding={props.padding}
      >
        {props.icon}
        <Text
          marginLeft="5px"
          color={!props.active ? 'red.300' : 'white'}
          marginRight="auto"
        >
          {props.name}
        </Text>
        {props.mentions !== 0 ? (
          <Flex
            justify="center"
            align="center"
            bg={props.active ? 'red.50' : 'red.300'}
            w="19px"
            h="14px"
            borderRadius="7px"
            boxShadow="0px 0px 4px #FC8181"
          >
            <Text color={props.active ? 'red.300' : 'red.50'} fontSize="10px">
              {props.mentions}
            </Text>
          </Flex>
        ) : (
          props.unread && <ActiveIcon />
        )}
      </Flex>
    </PseudoBox>
  )
}

export default Channel
