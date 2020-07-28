import React from 'react'
import rapidLogo from '../assets/img/logo.png'
import { Flex, Text, Image, Box } from '@chakra-ui/core'
import ThemeX from '../components/theme'

export default { title: 'SmallCard' }

const commonShadow = `
0 1px 1px rgba(0,0,0,0.12),
0 2px 2px rgba(0,0,0,0.12),
0 4px 4px rgba(0,0,0,0.12),
0 8px 8px rgba(0,0,0,0.12),
0 16px 16px rgba(0,0,0,0.12)`

const mediumBorderRadiusBottom = '25px'
const smallBorderRadius = '15px'

export const withText = () => {
  return (
    <ThemeX>
      <Flex
        backgroundColor="#292A2F"
        borderRadius={mediumBorderRadiusBottom}
        flexDirection="column"
        position="absolute"
        w="225px"
        h="95px"
      >
        <Box margin="20px">
          <Flex
            position="relative"
            style={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
            }}
          >
            <Box
              background="#262626"
              boxShadow={commonShadow}
              position="absolute"
              borderRadius={smallBorderRadius}
              transform="translateX(-10px) translateY(25px)"
            >
              <Image
                src={rapidLogo}
                width="75px"
                height="75px"
                alt="Rapid Logo"
              />
            </Box>
          </Flex>
          <Text
            color="gray.100"
            fontSize="lg"
            fontWeight="semibold"
            transform="translateX(10px) translateY(15px)"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Rapid
          </Text>
        </Box>
      </Flex>
    </ThemeX>
  )
}
