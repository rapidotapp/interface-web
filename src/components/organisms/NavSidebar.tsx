import { Flex, Image } from '@chakra-ui/core'
import React from 'react'
import { Bell, FileText, Globe, Inbox, Settings, Users } from 'react-feather'

import CircleButton from '../molecules/CircleButton'

interface navSidebarProps {
  active: string
}

export default function NavSidebar(props: navSidebarProps) {
  const imageURL =
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  return (
    <Flex
      w="7.375rem"
      h="100vh"
      direction="column"
      align="center"
      padding="29px"
    >
      <Flex w="60px" h="60px" marginBottom="auto" style={{ cursor: 'pointer' }}>
        <Image
          src={imageURL}
          borderRadius="30px"
          w="100%"
          h="100%"
          boxShadow="0px 0px 20px 5px rgba(252, 129, 129, 0.37);"
        />
      </Flex>
      <Flex
        w="60px"
        h="460px"
        direction="column"
        justify="space-between"
        align="center"
      >
        <CircleButton
          icon={
            <Users
              color={props.active === 'Communities' ? '#FFF5F5' : '#FC8181'}
              size={24}
            />
          }
          bg={props.active === 'Communities' ? 'red.300' : 'red.50'}
          link="/app/community"
        />
        <CircleButton
          icon={
            <Inbox
              color={props.active === 'Messaging' ? '#FFF5F5' : '#FC8181'}
              size={24}
            />
          }
          bg={props.active === 'Messaging' ? 'red.300' : 'red.50'}
          link="/app/explore"
        />
        <CircleButton
          icon={
            <FileText
              color={props.active === 'Posts' ? '#FFF5F5' : '#FC8181'}
              size={24}
            />
          }
          bg={props.active === 'Posts' ? 'red.300' : 'red.50'}
          link="/app/posts/"
        />
        <CircleButton
          icon={
            <Bell
              color={props.active === 'Notifications' ? '#FFF5F5' : '#FC8181'}
              size={24}
            />
          }
          bg={props.active === 'Notifications' ? 'red.300' : 'red.50'}
          link="/app/notifications"
        />
        <CircleButton
          icon={
            <Globe
              color={props.active === 'Explore' ? '#FFF5F5' : '#FC8181'}
              size={24}
            />
          }
          bg={props.active === 'Explore' ? 'red.300' : 'red.50'}
          link="/app/explore"
        />
      </Flex>
      <Flex w="60px" h="60px" justify="center" align="center" marginTop="auto">
        <CircleButton
          icon={<Settings color="#FC8181" size={24} />}
          bg="red.50"
          link=""
        />
      </Flex>
    </Flex>
  )
}
