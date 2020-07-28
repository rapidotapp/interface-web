import React from 'react'
import rapidLogo from '../assets/img/logo.png'
import { Button, Flex, Text, Image, Box } from '@chakra-ui/core'
import ThemeX from '../components/theme'

export default { title: 'Card' }

const commonShadow = `
0 1px 1px rgba(0,0,0,0.12),
0 2px 2px rgba(0,0,0,0.12),
0 4px 4px rgba(0,0,0,0.12),
0 8px 8px rgba(0,0,0,0.12),
0 16px 16px rgba(0,0,0,0.12)`

const bigBorderRadiusTop = '50px'
const mediumBorderRadiusBottom = '25px'
const smallBorderRadius = '15px'
const width = '300px'
const height = '300px'
// TODO: fix gradient
export const withText = () => {
  return (
    <ThemeX>
      <Flex
        height={height}
        width={width}
        flexDirection="column"
        borderTopLeftRadius={bigBorderRadiusTop}
        borderTopRightRadius={bigBorderRadiusTop}
        borderBottomLeftRadius={mediumBorderRadiusBottom}
        borderBottomRightRadius={mediumBorderRadiusBottom}
        boxShadow={commonShadow}
        position="relative"
      >
        <Box
          borderTopLeftRadius={bigBorderRadiusTop}
          borderTopRightRadius={bigBorderRadiusTop}
          height="60%"
          background="linear-gradient(-180deg, rgba(94,153,202,1) 0%, rgba(196,149,178,1) 100%)"
        ></Box>
        <Flex
          backgroundColor="#292A2F"
          borderRadius={mediumBorderRadiusBottom}
          flexDirection="column"
          position="absolute"
          bottom="0"
        >
          <Box margin="20px">
            <Flex position="relative">
              <Box
                background="#262626"
                boxShadow={commonShadow}
                position="absolute"
                bottom="-24px"
                borderRadius={smallBorderRadius}
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
              transform="translateX(92px) translateY(-2px)"
              fontWeight="semibold"
            >
              Rapid
            </Text>
            <Text color="gray.400" fontSize="sm" marginTop="10px">
              An amazing super coolio awesome app that auto manual repeat grid
            </Text>
            <Flex alignItems="center" marginTop="12px">
              <Box
                width="10px"
                height="10px"
                borderRadius={smallBorderRadius}
                backgroundColor="#00C1BD"
                marginRight="8px"
              ></Box>
              <Text color="gray.400" fontSize="xs">
                1,245 Members
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </ThemeX>
  )
}
