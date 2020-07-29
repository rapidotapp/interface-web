import { Box, Flex, Image } from '@chakra-ui/core'
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

import { commonShadow } from '../common'

export default function Sidebar() {
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
          color="#979797"
          size="lg"
          cursor="pointer"
          icon={faComment}
        />
        <FontAwesomeIcon
          color="#979797"
          size="lg"
          cursor="pointer"
          icon={faCompass}
        />
        <FontAwesomeIcon
          color="#979797"
          size="lg"
          cursor="pointer"
          icon={faUsers}
        />
        <FontAwesomeIcon
          color="#979797"
          size="lg"
          cursor="pointer"
          icon={faGlobeAmericas}
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
