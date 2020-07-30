import { Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'

interface wordWithLineProps {
  title: string
  color: string
}

const WordWithLine = (props: wordWithLineProps) => {
  return (
    <Flex
      color={props.color}
      w="100%"
      direction="row"
      alignItems="center"
      marginTop="8px"
      marginBottom="15px"
    >
      {props.title.split(' ').map((e, index) => (
        <Text
          key={index}
          fontSize="15px"
          marginLeft={index !== 0 ? '5px' : '0px'}
        >
          {e}
        </Text>
      ))}
      <Box marginLeft="12px" w="100%" h="1px" bg={props.color}></Box>
    </Flex>
  )
}

export default WordWithLine
