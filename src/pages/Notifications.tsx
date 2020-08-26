import { Flex } from '@chakra-ui/core'
import React from 'react'

import NotifDay from '~/components/organisms/NotifDay'

const Notifications = () => {
  return (
    <div>
      <Flex bg="red.50" direction="column" height="100vh">
        <NotifDay date="Aug 22nd, 2020" />
      </Flex>
    </div>
  )
}

export default Notifications
