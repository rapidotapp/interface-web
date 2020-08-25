import { Badge, Flex, PseudoBox, Text } from '@chakra-ui/core'
// import { motion } from 'framer-motion'
import React from 'react'

interface exploreCardProps {
  image: string
  tags: Array<string>
  size: 'sm' | 'lg'
  title: string
  desc?: string
}

const ExploreCard = (props: exploreCardProps) => {
  return (
    <PseudoBox
      w={props.size === 'sm' ? '43%' : '55%'}
      style={{
        transition: 'all 0.2s',
        cursor: 'pointer',
      }}
      _hover={{
        boxShadow: '0px 0px 20px rgba(115, 108, 124, 0.58)',
      }}
      h="100%"
      borderRadius="0.5rem"
    >
      <Flex
        bgImage={`url(${props.image})`}
        h="100%"
        borderRadius="0.5rem"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        padding="1rem 1rem"
        direction="column"
      >
        <Flex direction="row">
          {props.tags.map((t, i) => (
            <Badge
              key={i}
              variant="solid"
              borderRadius="999px"
              style={{
                textTransform: 'lowercase',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              marginRight="10px"
              h="1.5rem"
              paddingX="0.7rem"
              bg={i % 2 === 0 ? 'green.100' : 'purple.100'}
              color={i % 2 === 0 ? 'green.500' : 'purple.500'}
            >
              {`#${t}`}
            </Badge>
          ))}
        </Flex>
        <Text
          marginTop="auto"
          color="white"
          fontWeight="600"
          fontSize="2.8rem"
          style={{ lineHeight: '1.1' }}
        >
          {props.title}
        </Text>
        {props.desc && (
          <Text color="white" fontSize="1.5rem">
            {props.desc}
          </Text>
        )}
      </Flex>
    </PseudoBox>
  )
}

export default ExploreCard
