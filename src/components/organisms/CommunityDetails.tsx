import { Collapse, Flex, PseudoBox, Text } from '@chakra-ui/core'
import React from 'react'
import {
  MoreHorizontal,
  PhoneOutgoing,
  Search,
  UserPlus,
  XCircle,
} from 'react-feather'

import CommunityDetailIcon from '../molecules/CommunityDetailIcon'
import CommunityInfo from '../molecules/CommunityInfo'

const CommunityDetails = (props: any) => {
  return (
    <Collapse isOpen={props.isOpen}>
      <Flex
        w="20rem"
        h="100vh"
        bg="red.50"
        borderLeft="1px solid #B5B5B5"
        direction="column"
      >
        <Flex
          h="90px"
          borderBottom="1px solid #B5B5B5"
          align="center"
          direction="row"
          padding="25px"
        >
          <Flex direction="column" marginRight="auto">
            <Text color="red.300" as="b" fontSize="lg">
              Details
            </Text>
            <Text color="red.300" fontSize="lg">
              #general
            </Text>
          </Flex>
          <PseudoBox _hover={{ cursor: 'pointer' }}>
            <XCircle size="16px" color="#FC8181" onClick={props.handleDetail} />
          </PseudoBox>
        </Flex>
        <Flex
          h="90px"
          w="100%"
          borderBottom="1px solid #B5B5B5"
          align="center"
          justify="center"
          direction="row"
        >
          <Flex w="208px" h="55px" align="center" justify="space-between">
            <CommunityDetailIcon
              text="Call"
              icon={<PhoneOutgoing color="#fff" size="16px" />}
            />
            <CommunityDetailIcon
              text="Add"
              icon={<UserPlus color="#fff" size="16px" />}
            />
            <CommunityDetailIcon
              text="Search"
              icon={<Search color="#fff" size="16px" />}
            />
            <CommunityDetailIcon
              text="More"
              icon={<MoreHorizontal color="#fff" size="16px" />}
            />
          </Flex>
        </Flex>
        <CommunityInfo name="About" detail="" />
        <CommunityInfo name="Messages" detail="50" />
        <CommunityInfo name="Pinned" detail="5" />
        <CommunityInfo name="Files" detail="" />
      </Flex>
    </Collapse>
  )
}

export default CommunityDetails
