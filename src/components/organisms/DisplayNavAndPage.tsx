import { Box, Stack } from '@chakra-ui/core'
import React from 'react'

import NavSidebar from './NavSidebar'

interface IDisplayNavAndPage {
  children: JSX.Element[] | JSX.Element
}
export default function DisplayNavAndPage({
  children,
}: IDisplayNavAndPage): JSX.Element {
  return (
    <Stack spacing={4} direction="row" width="calc(100% - 20px)">
      <Box marginRight="25px">
        <NavSidebar active="dm" />
      </Box>
      <Stack spacing={8} marginTop="15px" width="100%">
        {children}
      </Stack>
    </Stack>
  )
}