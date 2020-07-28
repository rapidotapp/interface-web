import React from 'react'
import ThemedComponent from '../components/theme'
import { Box, Flex } from '@chakra-ui/core'

export default { title: 'NavSidebar' }

export const withText = () => {
  return (
    <ThemedComponent>
      <Flex row bg="gray.50" color="black">
        <Box></Box>
        <Box></Box>
      </Flex>
    </ThemedComponent>
  )
}
