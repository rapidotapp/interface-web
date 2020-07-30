import { Flex, Heading, Icon, Input, Stack, Text } from '@chakra-ui/core'
import {
  faBasketballBall,
  faCamera,
  faGraduationCap,
  faHammer,
  faHeadphones,
  faLaptopCode,
  faMusic,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { commonShadow } from '../common'

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
      <Flex
        flexDirection="column"
        backgroundColor="#292A2F"
        boxShadow={commonShadow}
        padding="25px"
        borderRadius={bigBorder}
        minWidth="200px"
      >
        <Stack direction="row" alignItems="center" margin="5px">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faGraduationCap}
          />
          <Text color="#979797" marginLeft="15px">
            Education
          </Text>
        </Stack>
        <Stack direction="row" alignItems="center" margin="5px">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faHeadphones}
          />
          <Text color="#979797" marginLeft="15px">
            Gaming
          </Text>
        </Stack>
        <Stack direction="row" alignItems="center" margin="5px">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faCamera}
          />
          <Text color="#979797" marginLeft="15px">
            Movies & TV
          </Text>
        </Stack>
        <Stack direction="row" alignItems="center" margin="5px">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faMusic}
          />
          <Text color="#979797" marginLeft="15px">
            Music
          </Text>
        </Stack>
        <Stack direction="row" alignItems="center" margin="5px">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faHammer}
          />
          <Text color="#979797" marginLeft="15px">
            Politics
          </Text>
        </Stack>
        <Stack direction="row" alignItems="center" margin="5px">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faBasketballBall}
          />
          <Text color="#979797" marginLeft="15px">
            Sports
          </Text>
        </Stack>
        <Stack direction="row" alignItems="center" margin="5px">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faLaptopCode}
          />
          <Text color="#979797" marginLeft="15px">
            Technology
          </Text>
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
          <Heading color="gray.100" as="h3" size="lg" fontWeight="semibold">
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
              <Text color="gray.100" fontSize="xl" fontWeight="semibold">
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
