import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/core'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Wave from 'react-wavify'

import { stdLightGrey } from '../common'

export default function Login() {
  return (
    <Flex h="100vh" w="100vw" bg="#212226" align="center" justify="center">
      <Flex
        h="500px"
        w="900px"
        bg="#212226"
        boxShadow="0px 0px 25px #151618"
        borderRadius="40px"
      >
        <Flex
          h="100%"
          w="50%"
          borderTopLeftRadius="40px"
          borderBottomLeftRadius="40px"
          style={{
            transform: 'rotateZ(90deg) translateY(-27px) scale(1.1, 1)',
          }}
          bg="#212226"
          zIndex={1}
        >
          <Wave
            fill="#2E2F36"
            paused={false}
            options={{
              height: 100,
              amplitude: 70,
              speed: 0.15,
              points: 3,
            }}
            mask="url(#mask)"
          >
            <mask id="mask">
              <path
                d="m-1.35958 455.0914l0 -409.51614c0 -12.09079 4.803047 -23.686373 13.352527 -32.235855c8.549479 -8.549479 20.145061 -13.352527 32.23585 -13.352527l405.7817 0c0.002319336 0 0.004180908 0.0018680654 0.004180908 0.0041724406l-0.004180908 500.68872l0 0c0 0.002319336 -0.0018615723 0.004180908 -0.004180908 0.004180908l-405.77753 -0.004180908l0 0c-25.177767 0 -45.58838 -20.410614 -45.58838 -45.58838z"
                fill="#00ff00"
              />
            </mask>
          </Wave>
        </Flex>
        <Flex
          h="100%"
          w="50%"
          justify="center"
          align="center"
          padding="40px"
          direction="column"
          zIndex={3}
        >
          <Stack
            direction="column"
            w="100%"
            h="100%"
            spacing={10}
            justify="center"
          >
            <Text color="#fff" fontSize="36px">
              Welcome back!
            </Text>
            <Stack direction="column" spacing={3}>
              <InputGroup>
                <InputLeftElement>
                  <FontAwesomeIcon icon={faUser} color={stdLightGrey} />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Email"
                  variant="filled"
                  bg="#42434A"
                  _hover={{
                    bg: '#42434A',
                  }}
                  color={stdLightGrey}
                  fontSize="16px"
                  w="400px"
                  h="40px"
                  borderRadius="20px"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement>
                  <FontAwesomeIcon icon={faLock} color={stdLightGrey} />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="Password"
                  variant="filled"
                  bg="#42434A"
                  _hover={{
                    bg: '#42434A',
                  }}
                  color={stdLightGrey}
                  fontSize="16px"
                  w="400px"
                  h="40px"
                  borderRadius="20px"
                />
              </InputGroup>
              <Flex w="100%" justify="flex-end" color={stdLightGrey}>
                <Text>Forgot Password?</Text>
              </Flex>
            </Stack>
            <Flex w="100%" justify="center" direction="column">
              <Button
                bgImage="linear-gradient(90deg, #4FE0B5 -2.1%, #3F54D1 100%);"
                fontWeight={400}
                color="#fff"
                w="100%"
                borderRadius="20px"
                fontSize="13px"
              >
                LOGIN
              </Button>
              <Stack
                justify="center"
                align="center"
                width="100%"
                spacing={1}
                direction="row"
                marginTop="5px"
              >
                <Text color={stdLightGrey}>I don&apos;t have an account.</Text>
                <Text color="#fff">Sign up</Text>
              </Stack>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}
