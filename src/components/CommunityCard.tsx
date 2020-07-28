import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/core'

import LogoBackdrop from './atoms/LogoBackdrop'
import MemberCount from './atoms/MemberCount'
import { commonShadow } from './atoms/common'

const bigBorderRadiusTop = '50px'
const mediumBorderRadiusBottom = '25px'
const width = '300px'
const height = '300px'

interface ICommunityCard {
  children?: React.ReactNode
  title: string
  description: string
  totalMembers: number
}
export default function CommunityCard({
  title,
  totalMembers,
}: ICommunityCard): React.ReactNode {
  return (
    <Flex
      height={height}
      width={width}
      flexDirection="column"
      borderTopLeftRadius={bigBorderRadiusTop}
      borderTopRightRadius={bigBorderRadiusTop}
      borderBottomLeftRadius={mediumBorderRadiusBottom}
      borderBottomRightRadius={mediumBorderRadiusBottom}
      boxShadow={commonShadow}
      position="relative"
    >
      <Box
        borderTopLeftRadius={bigBorderRadiusTop}
        borderTopRightRadius={bigBorderRadiusTop}
        height="60%"
        background="linear-gradient(-180deg, rgba(94,153,202,1) 0%, rgba(196,149,178,1) 100%)"
      ></Box>
      <Flex
        backgroundColor="#292A2F"
        borderRadius={mediumBorderRadiusBottom}
        flexDirection="column"
        position="absolute"
        bottom="0"
      >
        <Box margin="20px">
          <Flex position="relative">
            <LogoBackdrop position="absolute" bottom="-24px"></LogoBackdrop>
          </Flex>
          <Text
            color="gray.100"
            fontSize="lg"
            transform="translateX(92px) translateY(-2px)"
            fontWeight="semibold"
          >
            {title}
          </Text>
          <Text color="gray.400" fontSize="sm" marginTop="10px">
            An amazing super coolio awesome app that auto manual repeat grid
          </Text>
          <MemberCount totalMembers={totalMembers} />
        </Box>
      </Flex>
    </Flex>
  )
}
