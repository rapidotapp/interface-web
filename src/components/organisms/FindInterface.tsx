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
    <Flex width="100%" backgroundColor="#292A2F" borderRadius={bigBorder}>
      <Flex
        flexDirection="column"
        backgroundColor="#292A2F"
        boxShadow={commonShadow}
        padding="15px"
        borderRadius={bigBorder}
      >
        <Stack>
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faGraduationCap}
          />
          <Text>Education</Text>
        </Stack>
        <Stack>
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faHeadphones}
          />
          <Text>Gaming</Text>
        </Stack>
        <Stack>
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faCamera}
          />
          <Text>Movies & TV</Text>
        </Stack>
        <Stack>
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faMusic}
          />
          <Text>Music</Text>
        </Stack>
        <Stack>
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faHammer}
          />
          <Text>Politics</Text>
        </Stack>
        <Stack>
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faBasketballBall}
          />
          <Text>Sports</Text>
        </Stack>
        <Stack>
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faLaptopCode}
          />
          <Text>Technology</Text>
        </Stack>
      </Flex>
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
