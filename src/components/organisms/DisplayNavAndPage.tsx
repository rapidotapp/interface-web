import { Box, Stack } from '@chakra-ui/core'
import React from 'react'

import NavSidebar from './NavSidebar'

interface displayNavAndPageProps {
  children: React.ReactNode
}

export default function DisplayNavAndPage({
  children,
}: displayNavAndPageProps): JSX.Element {
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
