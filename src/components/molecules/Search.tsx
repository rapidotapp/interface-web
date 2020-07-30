import { Box, Flex, Input } from '@chakra-ui/core'
import React from 'react'
import { Search as SearchIcon } from 'react-feather'

import { commonShadow } from '../common'

export default function Search() {
  return (
    <Box
      display="inline"
      boxShadow={commonShadow}
      borderRadius="50px"
      backgroundColor="#25262B"
    >
      <Box borderRadius="50px" margin="10px" backgroundColor="#42434A">
        <Flex flexDirection="row" alignItems="center">
          <Box marginLeft="12px" marginRight="10px">
            <SearchIcon />
          </Box>
          <Input
            placeholder="Search"
            borderRadius="50px"
            backgroundColor="unset"
            border="unset"
          ></Input>
        </Flex>
      </Box>
    </Box>
  )
}
