import { Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { ChevronDown } from 'react-feather'

interface communityBarSectionHeaderProps {
  title: string
  color: string
  onClick: any
  isOpen: boolean
}

const CommunityBarSectionHeader = (props: communityBarSectionHeaderProps) => {
  return (
    <Flex
      h="70px"
      align="center"
      bg="rgba(255, 255, 255, 0.77)"
      padding="24px 16px"
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
    >
      <Text color={props.color} fontSize="lg" marginRight="auto">
        {props.title}
      </Text>
      <ChevronDown
        color="#FC8181"
        style={
          props.isOpen
            ? { transition: 'all 0.2s', transform: 'rotateZ(180deg)' }
            : { transition: 'all 0.2s' }
        }
      />
    </Flex>
  )
}

export default CommunityBarSectionHeader
