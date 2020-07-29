import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMicrophone,
  faVideoSlash,
  faComment,
  faCompass,
  faUsers,
  faGlobeAmericas,
  faAt,
  faCog,
} from '@fortawesome/free-solid-svg-icons'

interface navProps {
  active: string
}

export default function Sidebar(props: navProps) {
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
      boxShadow="0px 0px 25px #151618"
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
        <Box height="45px">
          <Image
            size="45px"
            src="https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg"
            borderRadius="50%"
            cursor="pointer"
          />
          <Box
            bg="#67e5ae"
            w="16px"
            h="16px"
            position="relative"
            bottom="15px"
            left="30px"
            borderRadius="50%"
            margin="0px"
            padding="0px"
            border="1px solid black"
            cursor="pointer"
          ></Box>
        </Box>
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
