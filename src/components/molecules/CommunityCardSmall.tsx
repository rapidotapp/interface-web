import { Flex, Text } from '@chakra-ui/core'
import React from 'react'

import LogoBackdrop from '../atoms/LogoBackdrop'
import MemberCount from '../atoms/MemberCount'
import { mediumBorderRadius } from '../common'

interface communityCardSmallProps {
  title: string
  totalMembers: string | number
}
export default function CommunityCardSmall({
  title,
  totalMembers,
}: communityCardSmallProps): JSX.Element {
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
