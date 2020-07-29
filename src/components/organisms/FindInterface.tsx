import React from 'react'
import { Input, Flex, Heading, Stack, Icon, Text } from '@chakra-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { commonShadow } from '../common'
import {
  faHeadphones,
  faCamera,
  faHammer,
  faBasketballBall,
  faLaptopCode,
  faGraduationCap,
  faMusic,
} from '@fortawesome/free-solid-svg-icons'

const bigBorder = '35px'
const maxBorder = '50px'

export default function FindInterface() {
  return (
    <Flex
      width="100%"
      backgroundColor="#292A2F"
      borderRadius={bigBorder}
      boxShadow={commonShadow}
    >
      <Stack
        flexDirection="column"
        backgroundColor="#292A2F"
        boxShadow={commonShadow}
        padding="15px 25px"
        borderRadius={bigBorder}
        minWidth="200px"
      >
        <Stack direction="row" justifyContent="start" alignItems="center">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faGraduationCap}
          />
          <Text margin="5px 10px">Education</Text>
        </Stack>
        <Stack direction="row" justifyContent="start" alignItems="center">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faHeadphones}
          />
          <Text margin="5px 10px">Gaming</Text>
        </Stack>
        <Stack direction="row" justifyContent="start" alignItems="center">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faCamera}
          />
          <Text margin="5px 10px">Movies & TV</Text>
        </Stack>
        <Stack direction="row" justifyContent="start" alignItems="center">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faMusic}
          />
          <Text margin="5px 10px">Music</Text>
        </Stack>
        <Stack direction="row" justifyContent="start" alignItems="center">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faHammer}
          />
          <Text margin="5px 10px">Politics</Text>
        </Stack>
        <Stack direction="row" justifyContent="start" alignItems="center">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faBasketballBall}
          />
          <Text margin="5px 10px">Sports</Text>
        </Stack>
        <Stack direction="row" justifyContent="start" alignItems="center">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faLaptopCode}
          />
          <Text margin="5px 10px">Technology</Text>
        </Stack>
      </Stack>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        margin="30px"
      >
        <Flex margin="25px" alignItems="center">
          <Heading as="h3" size="lg" fontWeight="semibold">
            Find new
          </Heading>
          <Flex
            marginLeft="20px"
            backgroundColor="#42434A"
            borderRadius={maxBorder}
          >
            <Flex
              alignItems="center"
              background="linear-gradient(-90deg, rgba(64,90,208,1) 0%, rgba(73,173,191,1) 100%)"
              padding="5px 15px"
              borderRadius={maxBorder}
            >
              <Icon color="gray.100" name="phone" paddingRight="8px"></Icon>
              <Text fontSize="xl" fontWeight="semibold">
                Drops
              </Text>
            </Flex>
            <Text
              fontSize="xl"
              color="gray.500"
              padding="5px 15px"
              fontWeight="semibold"
            >
              Communities
            </Text>
          </Flex>
        </Flex>
        <Input
          backgroundColor="white"
          color="black"
          borderRadius={maxBorder}
          placeholder="Basic usage"
        />
      </Flex>
    </Flex>
  )
}
