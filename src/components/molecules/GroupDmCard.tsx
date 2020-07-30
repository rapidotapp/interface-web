import { Box, Flex, Tag, Text } from '@chakra-ui/core'
import React from 'react'

import ImageGrid from '../atoms/ImageGrid'
import { stdLightGrey } from '../common'

interface groupDmCardProps {
  groupDm: {
    pfps: Array<string>
    unread: string
    online: number
    name: string
  }
}

const GroupDmCard = (props: groupDmCardProps) => {
  return (
    <Flex direction="row" w="100%" alignItems="center" marginY="6px">
      <ImageGrid size={45} images={props.groupDm.pfps} />
      <Box marginLeft="20px">
        <Text color="#fff" fontSize="lg">
          {props.groupDm.name}
        </Text>
        <Text color={stdLightGrey} fontSize="xs">
          {props.groupDm.online} online
        </Text>
      </Box>
      <Tag
        size="sm"
        variant="solid"
        bg="#5280E2"
        borderRadius="20px"
        marginLeft="auto"
        fontSize="12px"
        h="15px"
      >
        713
      </Tag>
    </Flex>
  )
}

export default GroupDmCard
