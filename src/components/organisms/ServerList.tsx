import { Flex } from '@chakra-ui/core'
import React from 'react'

import NavDivider from '../atoms/NavDivider'
import AddServerButton from '../molecules/AddServerButton'
import ServerIcon from '../molecules/ServerIcon'

const ServerList = () => {
  const iconURL =
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'

  return (
    <Flex
      h="100vh"
      w="7.375rem"
      padding="28px"
      direction="column"
      borderRight="1px solid #B5B5B5"
      align="center"
    >
      <AddServerButton />
      <NavDivider />
      <ServerIcon active={false} iconURL={iconURL} />
      <ServerIcon active={true} iconURL={iconURL} />
      <ServerIcon active={false} iconURL={iconURL} />
      <NavDivider />
      <ServerIcon active={false} iconURL={iconURL} />
      <ServerIcon active={false} iconURL={iconURL} />
      <ServerIcon active={false} iconURL={iconURL} />
    </Flex>
  )
}

export default ServerList
