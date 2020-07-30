import {
  Box,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Text,
} from '@chakra-ui/core'
import React from 'react'

import Sidebar from '../components/organisms/NavSidebar'
import ThemedComponent from '../components/theme'

export default { title: 'DirectMessages' }

export const directMessages = () => {
  const dms = [
    {
      name: 'Safin',
      username: '@safinsingh',
      pfp:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      unread: '13',
      online: true,
      isPinned: true,
    },
    {
      name: 'Safin',
      username: '@safinsingh',
      pfp:
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      unread: '13',
      online: false,
      isPinned: false,
    },
  ]

  const groupDms = [
    {
      pfps: [
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      ],
      unread: '13',
      numOnline: 10,
      isPinned: true,
    },
    {
      pfps: [
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      ],
      unread: '13',
      numOnline: 10,
      isPinned: false,
    },
    {
      pfps: [
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
        'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
      ],
      unread: '13',
      numOnline: 10,
      isPinned: false,
    },
  ]

  return (
    <ThemedComponent>
      <Flex
        w="500px"
        bg="#292A2F"
        borderTopRightRadius="45px"
        borderBottomRightRadius="45px"
        direction="row"
      >
        <Sidebar active="dm" />
        <Flex w="100%" justifyContent="center" direction="row">
          <Flex w="85%" paddingY="30px" direction="column">
            <Text fontSize="25px" color="white">
              Direct Messages
            </Text>
            <Box paddingY="10px">
              <InputGroup>
                <InputLeftElement>
                  <Icon name="search" color="#979797" />
                </InputLeftElement>
                <Input
                  type="phone"
                  placeholder="Search"
                  variant="filled"
                  bg="#42434A"
                  _hover={{
                    bg: '#42434A',
                  }}
                  color="#979797"
                  fontSize="16px"
                  w="100%"
                  h="40px"
                  borderRadius="20px"
                />
              </InputGroup>
            </Box>
            <Flex
              color="#707070"
              w="100%"
              direction="row"
              alignItems="center"
              marginTop="8px"
              marginBottom="15px"
            >
              <Text fontSize="15px">Pinned</Text>
              <Text fontSize="15px" marginLeft="4px">
                conversations
              </Text>
              <Box marginLeft="14px" w="100%" h="1px" bg="#42434A"></Box>
            </Flex>
            {dms
              .filter((dm) => {
                if (dm.isPinned) {
                  return dm
                }
              })
              .map((dm, index) => (
                <Flex
                  direction="row"
                  w="100%"
                  alignItems="center"
                  key={index}
                  marginY="6px"
                >
                  <Box height="45px">
                    <Image
                      size="45px"
                      src={dm.pfp}
                      borderRadius="50%"
                      cursor="pointer"
                    />
                    <Flex
                      bg={dm.online ? '#67e5ae' : '#000'}
                      w="16px"
                      h="16px"
                      position="relative"
                      bottom="15px"
                      left="30px"
                      borderRadius="50%"
                      margin="0px"
                      padding="0px"
                      border="1px solid black"
                      align="center"
                      justify="center"
                    >
                      {!dm.online && (
                        <Box
                          bg="#242529"
                          w="8px"
                          h="8px"
                          borderRadius="50%"
                        ></Box>
                      )}
                    </Flex>
                  </Box>
                  <Box marginLeft="20px">
                    <Text color="#fff" fontSize="lg">
                      {dm.name}
                    </Text>
                    <Text color="#979797" fontSize="xs">
                      {dm.username}
                    </Text>
                  </Box>
                  <Tag
                    size="sm"
                    variant="solid"
                    bg="#5280E2"
                    borderRadius="20px"
                    marginLeft="auto"
                    fontSize="12px"
                    h="15px"
                  >
                    {dm.unread}
                  </Tag>
                </Flex>
              ))}
            {groupDms
              .filter((groupDm) => {
                if (groupDm.isPinned) {
                  return groupDm
                }
              })
              .map((groupDm, index) => (
                <Flex
                  direction="row"
                  w="100%"
                  alignItems="center"
                  key={index}
                  marginY="6px"
                >
                  <Box height="45px">
                    <Flex
                      h="45px"
                      w="45px"
                      direction="row"
                      align="center"
                      justify="center"
                    >
                      <Flex direction="column" align="center" justify="center">
                        <Flex
                          h="22.5px"
                          w="22.5px"
                          align="center"
                          justify="center"
                        >
                          <Image
                            size="18px"
                            src={groupDm.pfps[0]}
                            borderRadius="50%"
                            cursor="pointer"
                          />
                        </Flex>
                        <Flex
                          h="22.5px"
                          w="22.5px"
                          align="center"
                          justify="center"
                        >
                          <Image
                            size="18px"
                            src={groupDm.pfps[1]}
                            borderRadius="50%"
                            cursor="pointer"
                          />
                        </Flex>
                      </Flex>
                      <Flex direction="column" align="center" justify="center">
                        <Flex
                          h="22.5px"
                          w="22.5px"
                          align="center"
                          justify="center"
                        >
                          <Image
                            size="18px"
                            src={groupDm.pfps[2]}
                            borderRadius="50%"
                            cursor="pointer"
                          />
                        </Flex>
                        <Flex
                          h="22.5px"
                          w="22.5px"
                          align="center"
                          justify="center"
                        >
                          <Image
                            size="18px"
                            src={groupDm.pfps[3]}
                            borderRadius="50%"
                            cursor="pointer"
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box marginLeft="20px">
                    <Text color="#fff" fontSize="lg">
                      Safin&apos;s Group Chat
                    </Text>
                    <Text color="#979797" fontSize="xs">
                      {groupDm.numOnline} online
                    </Text>
                  </Box>
                  <Tag
                    size="sm"
                    variant="solid"
                    bg="#5280E2"
                    borderRadius="20px"
                    marginLeft="auto"
                    fontSize="12px"
                    h="15px"
                  >
                    713
                  </Tag>
                </Flex>
              ))}
            <Flex
              color="#707070"
              w="100%"
              direction="row"
              alignItems="center"
              marginTop="8px"
              marginBottom="15px"
            >
              <Text fontSize="15px">All</Text>
              <Text fontSize="15px" marginLeft="4px">
                conversations
              </Text>
              <Box marginLeft="14px" w="100%" h="1px" bg="#42434A"></Box>
            </Flex>
            {dms
              .filter((dm) => {
                if (!dm.isPinned) {
                  return dm
                }
              })
              .map((dm, index) => (
                <Flex
                  direction="row"
                  w="100%"
                  alignItems="center"
                  key={index}
                  marginY="6px"
                >
                  <Box height="45px">
                    <Image
                      size="45px"
                      src={dm.pfp}
                      borderRadius="50%"
                      cursor="pointer"
                    />
                    <Flex
                      bg={dm.online ? '#67e5ae' : '#000'}
                      w="16px"
                      h="16px"
                      position="relative"
                      bottom="15px"
                      left="30px"
                      borderRadius="50%"
                      margin="0px"
                      padding="0px"
                      border="1px solid black"
                      align="center"
                      justify="center"
                    >
                      {!dm.online && (
                        <Box
                          bg="#242529"
                          w="8px"
                          h="8px"
                          borderRadius="50%"
                        ></Box>
                      )}
                    </Flex>
                  </Box>
                  <Box marginLeft="20px">
                    <Text color="#fff" fontSize="lg">
                      {dm.name}
                    </Text>
                    <Text color="#979797" fontSize="xs">
                      {dm.username}
                    </Text>
                  </Box>
                  <Tag
                    size="sm"
                    variant="solid"
                    bg="#5280E2"
                    borderRadius="20px"
                    marginLeft="auto"
                    fontSize="12px"
                    h="15px"
                  >
                    {dm.unread}
                  </Tag>
                </Flex>
              ))}
            {groupDms
              .filter((groupDm) => {
                if (!groupDm.isPinned) {
                  return groupDm
                }
              })
              .map((groupDm, index) => (
                <Flex
                  direction="row"
                  w="100%"
                  alignItems="center"
                  key={index}
                  marginY="6px"
                >
                  <Box height="45px">
                    <Flex
                      h="45px"
                      w="45px"
                      direction="row"
                      align="center"
                      justify="center"
                    >
                      <Flex direction="column" align="center" justify="center">
                        <Flex
                          h="22.5px"
                          w="22.5px"
                          align="center"
                          justify="center"
                        >
                          <Image
                            size="18px"
                            src={groupDm.pfps[0]}
                            borderRadius="50%"
                            cursor="pointer"
                          />
                        </Flex>
                        <Flex
                          h="22.5px"
                          w="22.5px"
                          align="center"
                          justify="center"
                        >
                          <Image
                            size="18px"
                            src={groupDm.pfps[1]}
                            borderRadius="50%"
                            cursor="pointer"
                          />
                        </Flex>
                      </Flex>
                      <Flex direction="column" align="center" justify="center">
                        <Flex
                          h="22.5px"
                          w="22.5px"
                          align="center"
                          justify="center"
                        >
                          <Image
                            size="18px"
                            src={groupDm.pfps[2]}
                            borderRadius="50%"
                            cursor="pointer"
                          />
                        </Flex>
                        <Flex
                          h="22.5px"
                          w="22.5px"
                          align="center"
                          justify="center"
                        >
                          <Image
                            size="18px"
                            src={groupDm.pfps[3]}
                            borderRadius="50%"
                            cursor="pointer"
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box marginLeft="20px">
                    <Text color="#fff" fontSize="lg">
                      Safin&apos;s Group Chat
                    </Text>
                    <Text color="#979797" fontSize="xs">
                      {groupDm.numOnline} online
                    </Text>
                  </Box>
                  <Tag
                    size="sm"
                    variant="solid"
                    bg="#5280E2"
                    borderRadius="20px"
                    marginLeft="auto"
                    fontSize="12px"
                    h="15px"
                  >
                    713
                  </Tag>
                </Flex>
              ))}
          </Flex>
        </Flex>
      </Flex>
    </ThemedComponent>
  )
}
