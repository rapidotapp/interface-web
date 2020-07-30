import { Box } from '@chakra-ui/core'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function IconMentions() {
  return (
    <Box>
      <FontAwesomeIcon cursor="pointer" color="#979797" size="lg" icon={faAt} />
    </Box>
  )
}
