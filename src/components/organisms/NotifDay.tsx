import { Flex, Text } from '@chakra-ui/core'
import React from 'react'

import NotifBox from '../molecules/NotifBox'
import NotifWithButton from '../molecules/NotifWithButton'

interface NotifFrameProps {
  date: string
}

const NotifDay = (props: NotifFrameProps) => {
  return (
    <div>
      <Flex direction="column">
        <Flex
          w="92vw"
          direction="column"
          bg="red.50"
          overflowX="hidden"
          overflowY="scroll"
          textAlign="left"
        >
          <Text
            fontSize="1.15em"
            as="u"
            padding="1em"
            color="#FC8181"
            fontWeight="bold"
          >
            {props.date}
          </Text>
          <NotifBox
            status="warning"
            variant="top-accent"
            title="Update"
            text="RapidApp is discontinuing channels with few exceptions"
            time="4:22 PM"
          />
          <NotifBox
            status="info"
            variant="subtle"
            title="Messages in #annoucements"
            text="[safinuser123]: hey guys how r u doing"
            time="8:31 PM"
          />
        </Flex>

        <Flex
          w="92vw"
          direction="column"
          bg="red.50"
          overflowX="hidden"
          overflowY="scroll"
          textAlign="left"
        >
          <Text
            fontSize="1.15em"
            as="u"
            padding="1em"
            color="#FC8181"
            fontWeight="bold"
          >
            Aug 21st, 2020
          </Text>
          <NotifBox
            status="info"
            variant="top-accent"
            title="New messages in [React Dev]"
            text="12 new messages in the [React Development] Community"
            time="8:31 PM"
          />
          <NotifBox
            status="success"
            variant="left-accent"
            title="Account Secured"
            text="Your account is secure! You may use Rapid freely :)"
            time="10:41 AM"
          />
          <NotifBox
            status="success"
            variant="solid"
            title="Password Changed"
            text="Your password has been successfully changed"
            time="10:39 AM"
          />
          <NotifBox
            status="info"
            variant="subtle"
            title="New messages in [Cooking]"
            text="32 new messages in the [Cooking] Community"
            time="8:31 PM"
          />
          <NotifWithButton
            status="error"
            variant="subtle"
            title="Security Warning"
            text="Login from unauthorized device detected in Seattle, Washington"
            time="2:47 AM"
            buttonText="Secure Account"
          />
        </Flex>
      </Flex>
    </div>
  )
}

export default NotifDay
