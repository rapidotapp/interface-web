import { Box, Flex, Image } from '@chakra-ui/core'
import React from 'react'

interface imageGridProps {
  size: number
  images: Array<string>
}

const ImageGrid = (props: imageGridProps) => {
  return (
    <Box height={props.size + 'px'}>
      <Flex
        h={props.size + 'px'}
        w={props.size + 'px'}
        direction="row"
        align="center"
        justify="center"
      >
        <Flex direction="column" align="center" justify="center">
          <Flex
            h={props.size / 2 + 'px'}
            w={props.size / 2 + 'px'}
            align="center"
            justify="center"
          >
            <Image
              size={props.size / 2.75 + 'px'}
              src={props.images[0]}
              borderRadius="50%"
              cursor="pointer"
            />
          </Flex>
          <Flex
            h={props.size / 2 + 'px'}
            w={props.size / 2 + 'px'}
            align="center"
            justify="center"
          >
            <Image
              size={props.size / 2.75 + 'px'}
              src={props.images[1]}
              borderRadius="50%"
              cursor="pointer"
            />
          </Flex>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Flex
            h={props.size / 2 + 'px'}
            w={props.size / 2 + 'px'}
            align="center"
            justify="center"
          >
            <Image
              size={props.size / 2.75 + 'px'}
              src={props.images[2]}
              borderRadius="50%"
              cursor="pointer"
            />
          </Flex>
          <Flex
            h={props.size / 2 + 'px'}
            w={props.size / 2 + 'px'}
            align="center"
            justify="center"
          >
            <Image
              size={props.size / 2.75 + 'px'}
              src={props.images[3]}
              borderRadius="50%"
              cursor="pointer"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
export default ImageGrid
