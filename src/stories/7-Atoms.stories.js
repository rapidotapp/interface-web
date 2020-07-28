import React from 'react'
import LogoBackdrop from '../components/atoms/LogoBackdrop'
import MemberCount from '../components/atoms/MemberCount'
import ThemeX from '../components/theme'

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
