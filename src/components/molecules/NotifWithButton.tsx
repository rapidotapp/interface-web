import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/core'
import React from 'react'

// status error success warning info, variant subtle solid left-accent top-accent

interface NotifProps {
  status: any
  variant: any
  title: string
  text: string
  time: string
  buttonText: string
}

const NotifWithButton = (props: NotifProps) => {
  return (
    <Alert
      status={props.status}
      variant={props.variant}
      justifyContent="center"
      textAlign="center"
      outline="solid 0.15em white"
    >
      <Flex flexDirection="column">
        <AlertTitle>{props.title}</AlertTitle>
        <AlertDescription>{props.text}</AlertDescription>
        <Text fontSize="0.7em">{props.time}</Text>
        <Button
          leftIcon={Icon}
          variantColor="red"
          variant="outline"
          size="sm"
          marginTop="1em"
        >
          {props.buttonText}
        </Button>
      </Flex>
    </Alert>
  )
}

export default NotifWithButton
