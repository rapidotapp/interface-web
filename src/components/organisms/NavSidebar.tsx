import { Flex } from '@chakra-ui/core'
import {
  faComment,
  faCompass,
  faGlobeAmericas,
  faMicrophone,
  faUsers,
  faVideoSlash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import IconMentions from '../atoms/IconMentions'
import IconSettings from '../atoms/IconSettings'
import UserAvatar from '../atoms/UserAvatar'
import { commonShadow } from '../common'

interface navSidebarProps {
  active: string
}

export default function NavSidebar(props: navSidebarProps) {
  return (
    <Flex
      direction="column"
      bg="#212226"
      color="black"
      w="105px"
      h="100vh"
      borderTopRightRadius="35px"
      borderBottomRightRadius="35px"
      align="center"
      justify="space-between"
      paddingY="12px"
      boxShadow={commonShadow}
    >
      <Flex
        w="70px"
        h="190px"
        bg="#151619"
        direction="column"
        borderRadius="50px"
        align="center"
        justify="space-between"
        paddingTop="13px"
        paddingBottom="30px"
      >
        <UserAvatar
          avatarURL="https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg"
          onlineStatus="online"
        />
        <FontAwesomeIcon
          color="#979797"
          size="lg"
          cursor="pointer"
          icon={faMicrophone}
        />
        <FontAwesomeIcon
          cursor="pointer"
          color="#979797"
          size="lg"
          icon={faVideoSlash}
        />
      </Flex>
      <Flex
        w="70px"
        h="380px"
        direction="column"
        borderRadius="50px"
        align="center"
        justify="space-between"
        paddingY="75px"
      >
        <Link to="/chat">
          <FontAwesomeIcon
            color={props.active === 'dm' ? '#fff' : '#979797'}
            size="lg"
            cursor="pointer"
            icon={faComment}
            style={
              props.active === 'dm'
                ? { filter: 'drop-shadow(0px 0px 10px #4F80E2)' }
                : {}
            }
          />
        </Link>
        <Link to="/explore">
          <FontAwesomeIcon
            color={props.active === 'explore' ? '#fff' : '#979797'}
            size="lg"
            cursor="pointer"
            icon={faCompass}
            style={
              props.active === 'explore'
                ? { filter: 'drop-shadow(0px 0px 10px #4F80E2)' }
                : {}
            }
          />
        </Link>
        <Link to="/users">
          <FontAwesomeIcon
            color={props.active === 'friends' ? '#fff' : '#979797'}
            size="lg"
            cursor="pointer"
            icon={faUsers}
            style={
              props.active === 'friends'
                ? { filter: 'drop-shadow(0px 0px 10px #4F80E2)' }
                : {}
            }
          />
        </Link>
        <Link to="/community">
          <FontAwesomeIcon
            color={props.active === 'communities' ? '#fff' : '#979797'}
            size="lg"
            cursor="pointer"
            icon={faGlobeAmericas}
            style={
              props.active === 'communities'
                ? { filter: 'drop-shadow(0px 0px 10px #4F80E2)' }
                : {}
            }
          />
        </Link>
      </Flex>

      <Flex
        w="70px"
        h="190px"
        direction="column"
        borderRadius="50px"
        align="center"
        justify="space-between"
        paddingY="13px"
        paddingTop="110px"
        paddingBottom="13px"
      >
        <IconMentions />
        <IconSettings />
      </Flex>
    </Flex>
  )
}
