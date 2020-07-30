import { Box, Stack } from '@chakra-ui/core'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import NavSidebar from './NavSidebar'

const ErrorOccured = () => <h1>Some error occured</h1>

interface IDisplayNavAndPage {
  children: JSX.Element[] | JSX.Element
}
export default function NavLayout({
  children,
}: IDisplayNavAndPage): JSX.Element {
  return (
    <Stack spacing={4} direction="row" width="calc(100% - 20px)">
      <Box marginRight="25px">
        <NavSidebar active="dm" />
      </Box>
      <Stack spacing={8} marginTop="15px" width="100%">
        <ErrorBoundary FallbackComponent={ErrorOccured}>
          {children}
        </ErrorBoundary>
      </Stack>
    </Stack>
  )
}
