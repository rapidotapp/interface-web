import { Box, Flex, Stack } from '@chakra-ui/core'
import React from 'react'

import GroupHeading from '../components/atoms/GroupHeading'
import CommunityCardSmall from '../components/molecules/CommunityCardSmall'
import Search from '../components/molecules/Search'
import DisplayNavAndPage from '../components/organisms/DisplayNavAndPage'

interface ICommunityPage {}
export default function Community({}: ICommunityPage) {
  return (
    <DisplayNavAndPage>
      <Flex alignItems="flex-end" marginLeft="auto" width="100%">
        <Search />
      </Flex>
      <GroupHeading>Pinned Communities</GroupHeading>
      <Stack direction="row" flexWrap="wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          return (
            <Box margin="10px" key={i}>
              <CommunityCardSmall
                title="Rapid"
                totalMembers={1234}
              ></CommunityCardSmall>
            </Box>
          )
        })}
      </Stack>
      <GroupHeading>All Communities</GroupHeading>
      <Stack direction="row" flexWrap="wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          return (
            <Box margin="10px" key={i}>
              <CommunityCardSmall
                title="Rapid"
                totalMembers={1234}
              ></CommunityCardSmall>
            </Box>
          )
        })}
      </Stack>
    </DisplayNavAndPage>
  )
}
