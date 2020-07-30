import { Box, Flex, Image, Text } from '@chakra-ui/core'
import React from 'react'

import { commonShadow } from '../common'

export default function DropCardSmall() {
  const borderRadius = '20px'
  return (
    <Flex
      boxShadow={commonShadow}
      backgroundColor="#292A2F"
      borderRadius={borderRadius}
      alignItems="center"
      width="190px"
    >
      <Box backgroundColor="white" borderRadius={borderRadius}>
        <Image
          transform="scale(1.1, 1.1)"
          src="https://cdn3.iconfinder.com/data/icons/google-suits-1/32/18_google_translate_text_language_translation-512.png"
          alt="Google Image Logo"
          width="95px"
        ></Image>
      </Box>

      <Box
        borderRadius={borderRadius}
        justifyContent="space-between"
        width="100%"
        margin="10px"
      >
        <Box>
          <Text
            fontSize="sm"
            whiteSpace="pre-wrap"
            textAlign="center"
            marginRight="10px"
          >
            Google
            <br />
            Translate
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}
