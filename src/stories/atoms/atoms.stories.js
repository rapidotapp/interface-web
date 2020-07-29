import React from 'react'
import ThemeX from '../../components/theme'
import LogoBackdrop from '../../components/atoms/LogoBackdrop'
import MemberCount from '../../components/atoms/MemberCount'
import GroupHeading from '../../components/atoms/GroupHeading'

export default { title: 'Atoms' }

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

export const groupHeading = () => (
  <ThemeX>
    <GroupHeading>Trending</GroupHeading>
  </ThemeX>
)
