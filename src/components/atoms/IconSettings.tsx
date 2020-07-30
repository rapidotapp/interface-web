import { Box } from '@chakra-ui/core'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function IconSettings() {
  return (
    <Box>
      <FontAwesomeIcon
        cursor="pointer"
        color="#979797"
        size="lg"
        icon={faCog}
      />
    </Box>
  )
}
