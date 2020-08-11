import { Flex, Text } from '@chakra-ui/core'
import React from 'react'

interface communityInfoProps {
  name: string
  detail: string
}

const CommunityInfo = (props: communityInfoProps) => {
  return (
    <Flex
      h="90px"
      w="100%"
      border="1px solid #B5B5B5"
      align="center"
      direction="row"
      padding="25px"
    >
      <Flex direction="column" marginRight="auto">
        <Text color="red.300" as="b" fontSize="lg">
          {props.name}
        </Text>
      </Flex>
      <Text color="red.300" fontSize="lg">
        {props.detail}
      </Text>
    </Flex>
  )
}

export default CommunityInfo
