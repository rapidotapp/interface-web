import { Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'

interface wordWithLineProps {
  title: string
}

const WordWithLine = (props: wordWithLineProps) => {
  return (
    <Flex
      color="#42434A"
      w="100%"
      direction="row"
      alignItems="center"
      marginTop="8px"
      marginBottom="15px"
    >
      <Text>{props.title}</Text>
      <Box marginLeft="15px" w="100%" h="1px" bg="#42434A"></Box>
    </Flex>
  )
}

export default WordWithLine
