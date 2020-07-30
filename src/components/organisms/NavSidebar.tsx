import { Flex } from '@chakra-ui/core'
import {
  faAt,
  faCog,
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

import UserAvatar from '../atoms/UserAvatar'
import { commonShadow } from '../common'

export default function NavSidebar() {
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
          onlineStatus={'online'}
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
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faComment}
          />
        </Link>

        <Link to="/explore">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faCompass}
          />
        </Link>

        <Link to="/users">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faUsers}
          />
        </Link>

        <Link to="/community">
          <FontAwesomeIcon
            color="#979797"
            size="lg"
            cursor="pointer"
            icon={faGlobeAmericas}
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
        <FontAwesomeIcon
          cursor="pointer"
          color="#979797"
          size="lg"
          icon={faAt}
        />
        <FontAwesomeIcon
          cursor="pointer"
          color="#979797"
          size="lg"
          icon={faCog}
        />
      </Flex>
    </Flex>
  )
}
