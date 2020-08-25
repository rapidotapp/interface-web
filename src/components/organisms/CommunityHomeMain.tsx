import { Badge, Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { Zap } from 'react-feather'

import TrendingGrid from './TrendingGrid'

const CommunityHomeMain = () => {
  const header =
    'https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop'

  const trending = [
    {
      name: 'B1ing',
      header:
        'https://images.unsplash.com/photo-1535083252457-6080fe29be45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
      desc: '',
      tags: [],
    },
    {
      name: 'Dark Arts',
      header:
        'https://images.unsplash.com/photo-1555448248-2571daf6344b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
      desc: '',
      tags: [],
    },
    {
      name: 'Banff',
      header:
        'https://images.unsplash.com/photo-1464054573978-f220a48c764c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format',
      desc: '',
      tags: [],
    },
    {
      name: 'BTS',
      header:
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format',
      desc: '',
      tags: [],
    },
  ]

  return (
    <Flex direction="column" w="100%" h="100vh" overflow="scroll">
      <Flex
        h="25rem"
        padding="3rem"
        direction="column"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${header})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          imageOrientation: '90deg',
        }}
      >
        <Text color="rgba(255, 255, 255, 0.61);" fontSize="0.75rem">
          rapid staff favourite
        </Text>
        <Text fontSize="3rem" as="b" color="white">
          Art Hangout
        </Text>
        <Text fontSize="1.5rem" color="red.50">
          Artists, designers, developers, unite!
        </Text>
        <Flex marginTop="auto">
          <Badge
            variant="solid"
            padding="0.2rem 0.6rem"
            borderRadius="999px"
            style={{ textTransform: 'lowercase' }}
            marginRight="10px"
          >
            #sealife
          </Badge>
          <Badge
            variant="solid"
            padding="0.2rem 0.6rem"
            borderRadius="999px"
            style={{ textTransform: 'lowercase' }}
            marginRight="10px"
          >
            #abstract
          </Badge>
          <Badge
            variant="solid"
            padding="0.2rem 0.6rem"
            borderRadius="999px"
            bg="rgba(252, 129, 129, 0.41);"
            style={{ textTransform: 'lowercase' }}
            marginRight="10px"
          >
            <Flex align="center" justify="center">
              <Box marginRight="2.5px">
                <Zap color="white" size="0.7rem" />
              </Box>
              for you
            </Flex>
          </Badge>
        </Flex>
      </Flex>
      <Flex padding="3rem" direction="column" bg="red.300">
        <Text fontSize="3rem" as="b" color="white">
          About
        </Text>
        <Text fontSize="1.5rem" color="red.50">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </Text>
      </Flex>
      <Flex padding="3rem">
        <Flex direction="column" w="100%" marginRight="30px">
          <Text fontSize="3rem" as="b" color="red.300">
            Stories
          </Text>
          <Text fontSize="1.5rem" color="red.300" marginBottom="10px">
            Community ideas
          </Text>
          <TrendingGrid trending={trending} />
        </Flex>
        <Flex direction="column" w="100%" marginLeft="30px">
          <Text fontSize="3rem" as="b" color="red.300">
            Streams
          </Text>
          <Text fontSize="1.5rem" color="red.300" marginBottom="10px">
            The best of, selected by our amazing jellyfish(es)!
          </Text>
          <TrendingGrid trending={trending} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default CommunityHomeMain
