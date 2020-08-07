import { Flex, Image } from '@chakra-ui/core'
import React from 'react'
import { Bell, FileText, Globe, Inbox, Settings, Users } from 'react-feather'

import NavTab from '../molecules/NavTab'

export default function NavSidebar() {
  const imageURL =
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  return (
    <Flex w="118px" h="100vh" direction="column" align="center" padding="29px">
      <Flex w="60px" h="60px" marginBottom="auto">
        <Image src={imageURL} borderRadius="30px" w="100%" h="100%" />
      </Flex>
      <Flex
        w="60px"
        h="460px"
        direction="column"
        justify="space-between"
        align="center"
      >
        <NavTab icon={<Users color="#FFF5F5" size={24} />} bg="red.300" />
        <NavTab icon={<Inbox color="#FC8181" size={24} />} bg="red.50" />
        <NavTab icon={<FileText color="#FC8181" size={24} />} bg="red.50" />
        <NavTab icon={<Bell color="#FC8181" size={24} />} bg="red.50" />
        <NavTab icon={<Globe color="#FC8181" size={24} />} bg="red.50" />
      </Flex>
      <Flex w="60px" h="60px" justify="center" align="center" marginTop="auto">
        <Settings color="#FC8181" size={24} />
      </Flex>
    </Flex>
  )
}
