import React from 'react'

import FriendSearchBarButtom from '../../components/atoms/FriendSearchBarButton'
import GroupHeading from '../../components/atoms/GroupHeading'
import ImageGrid from '../../components/atoms/ImageGrid'
import LogoBackdrop from '../../components/atoms/LogoBackdrop'
import MemberCount from '../../components/atoms/MemberCount'
import SearchBar from '../../components/atoms/SearchBar'
import UserAvatar from '../../components/atoms/UserAvatar'
import WordWithLine from '../../components/atoms/WordWithLine'
import ThemeX from '../../components/theme'

export default { title: 'atoms' }

export const friendSearchBarButton = () => (
  <ThemeX>
    <FriendSearchBarButtom />
  </ThemeX>
)

export const groupHeading = () => (
  <ThemeX>
    <GroupHeading>Trending</GroupHeading>
  </ThemeX>
)

export const imageGrid = () => (
  <ThemeX>
    <ImageGrid size="16px" />
  </ThemeX>
)

export const logoBackdrop = () => (
  <ThemeX>
    <LogoBackdrop />
  </ThemeX>
)

export const memberCount = () => (
  <ThemeX>
    <MemberCount totalMembers={1234} />
  </ThemeX>
)

export const searchBar = () => (
  <ThemeX>
    <SearchBar />
  </ThemeX>
)

export const userAvatar = () => (
  <ThemeX>
    <UserAvatar
      avatarURL="https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg"
      onlineStatus="online"
    />
  </ThemeX>
)

export const wordWithLine = () => (
  <ThemeX>
    <WordWithLine title="Word" color="blue" />
  </ThemeX>
)
