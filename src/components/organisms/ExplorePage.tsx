import { Badge, Box, Flex, Input, Text } from '@chakra-ui/core'
import React from 'react'
import { Zap } from 'react-feather'

const ExplorePage = () => {
  const communityHeader =
    'https://images.unsplash.com/photo-1559291001-693fb9166cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExNjMwfQ'

  return (
    <Flex w="100%" h="100vh" direction="column">
      <Flex direction="column" padding="2rem 4rem">
        <Flex align="center">
          <Text fontSize="2.25rem" color="red.300" as="b" marginRight="10px">
            hey there, Safin!
          </Text>
          <Zap color="#FC8181" size="1.5rem" />
        </Flex>
        <Flex marginTop="12px" align="center">
          <Flex width="22.5rem">
            <Text color="red.300" fontSize="1.5rem">
              let&apos;s find some new
            </Text>
          </Flex>
          <Flex
            borderRadius="999px"
            bg="red.300"
            boxShadow="0px 0px 20px rgba(251, 182, 206, 0.49)"
            padding="0.25rem"
            marginLeft="10px"
            width="12.5rem"
          >
            <Flex
              bg="white"
              justify="center"
              align="center"
              borderRadius="999px"
              padding="0.5rem"
            >
              <Text color="red.300" as="b">
                communities
              </Text>
            </Flex>
            <Flex
              bg="red.300"
              justify="center"
              align="center"
              borderRadius="999px"
              padding="0.5rem"
              marginLeft="5px"
            >
              <Text color="white" as="b">
                friends
              </Text>
            </Flex>
          </Flex>
          <Input
            marginLeft="10px"
            placeholder="search"
            borderRadius="999px"
            color="red.300"
            borderColor="red.300"
            focusBorderColor="red.300"
            _placeholder={{ color: 'red.300', fontWeight: '700' }}
          />
        </Flex>
      </Flex>
      <Flex
        backgroundImage={'url(' + communityHeader + ')'}
        w="90%"
        h="25rem"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        boxShadow="0px 0px 30px rgba(204, 148, 147, 0.54)"
        padding="3rem"
        direction="column"
        borderRadius="1.5rem"
        marginX="4rem"
      >
        <Text color="rgba(255, 255, 255, 0.61);" fontSize="0.75rem">
          rapid staff favorite
        </Text>
        <Text fontSize="3rem" as="b" color="red.50">
          Jellyfishes
        </Text>
        <Text fontSize="1.5rem" color="red.50">
          A community for the abstract
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
          <Flex marginLeft="auto">
            <Badge
              variant="solid"
              padding="0.2rem 0.6rem"
              borderRadius="999px"
              style={{
                textTransform: 'lowercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              marginRight="10px"
            >
              <Flex justify="center" align="center">
                <Box
                  h="0.75rem"
                  w="0.75rem"
                  bg="rgba(252, 129, 129, 0.62);"
                  borderRadius="999px"
                  marginX="3px"
                ></Box>
                <Box
                  h="0.75rem"
                  w="0.75rem"
                  bg="rgba(252, 255, 255, 0.62);"
                  borderRadius="999px"
                  marginX="3px"
                ></Box>
                <Box
                  h="0.75rem"
                  w="0.75rem"
                  bg="rgba(252, 255, 255, 0.62);"
                  borderRadius="999px"
                  marginX="3px"
                ></Box>
                <Box
                  h="0.75rem"
                  w="0.75rem"
                  bg="rgba(252, 255, 255, 0.62);"
                  borderRadius="999px"
                  marginX="3px"
                ></Box>
              </Flex>
            </Badge>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ExplorePage
