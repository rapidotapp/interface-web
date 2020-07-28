import React from 'react'
import ThemedComponent from '../components/theme'
import {
  Box,
  Stack,
  Flex,
  Text,
  theme,
  Button,
  Heading,
  InputGroup,
  InputLeftAddon,
  Input,
} from '@chakra-ui/core'
import { Mail } from 'react-feather'
import Wave from 'react-wavify'

export default { title: 'LoginCard' }

export const withText = () => {
  return (
    <ThemedComponent>
      <Stack shadow="lg" width="50rem" borderColor="white">
        <Stack>
          <Heading>Welcome!</Heading>
          <Text>
            We&apos;re super happy to have you here. Let&apos;s get started!
          </Text>
          <InputGroup>
            <Input placeholder="Email" />
          </InputGroup>

          <Button
            style={{
              background:
                'linear-gradient(90deg, #4FE0B5 -46.9%, #3F54D1 100%)',
            }}
          >
            Sign in using Magic Link
          </Button>
        </Stack>
        <Wave
          fill={theme.colors.gray[700]}
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.25,
            points: 15,
          }}
        />
      </Stack>
    </ThemedComponent>
  )
}
