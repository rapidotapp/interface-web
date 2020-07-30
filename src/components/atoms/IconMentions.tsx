import { Box } from '@chakra-ui/core'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { stdLightGrey } from '../common'

export default function IconMentions() {
  return (
    <Box>
      <FontAwesomeIcon
        cursor="pointer"
        color={stdLightGrey}
        size="lg"
        icon={faAt}
      />
    </Box>
  )
}
