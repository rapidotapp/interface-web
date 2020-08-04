import { Box, Stack } from '@chakra-ui/core'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import NavSidebar from '~organisms/NavSidebar'

const ErrorOccured = () => <h1>Some error occured</h1>

interface layoutNavProps {
  children: React.ReactNode
  active: string
}
export default function LayoutNav({
  children,
  active,
}: layoutNavProps): JSX.Element {
  return (
    <Stack spacing={4} direction="row" width="calc(100% - 20px)">
      <Box marginRight="25px">
        <NavSidebar active={active} />
      </Box>
      <Stack spacing={8} marginTop="15px" width="100%">
        <ErrorBoundary FallbackComponent={ErrorOccured}>
          {children}
        </ErrorBoundary>
      </Stack>
    </Stack>
  )
}
