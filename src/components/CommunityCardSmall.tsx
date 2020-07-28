import React from 'react'
import { Flex, Text } from '@chakra-ui/core'
import LogoBackdrop from './atoms/LogoBackdrop'
import MemberCount from './atoms/MemberCount'
import { mediumBorderRadius } from './atoms/common'

interface ICommunityCardSmall {
  title: string
  totalMembers: string | number
}
export default function CommunityCardSmall({
  title,
  totalMembers,
}: ICommunityCardSmall): React.ReactNode {
  return (
    <Flex
      backgroundColor="#292A2F"
      alignItems="center"
      width="255px"
      padding="20px"
      borderRadius={mediumBorderRadius}
    >
      <LogoBackdrop />
      <Flex flexDirection="column" alignItems="flex-start" marginLeft="20px">
        <Text fontWeight="semibold">{title}</Text>
        <MemberCount totalMembers={totalMembers} />
      </Flex>
    </Flex>
  )
}
