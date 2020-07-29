import React from 'react'
import ThemeX from '../../components/theme'
import CommunityCard from '../../components/molecules/CommunityCard'
import CommunityCardSmall from '../../components/molecules/CommunityCardSmall'

export default { title: 'CommunityCard' }

export const communityCard = () => {
  return (
    <ThemeX>
      <CommunityCard title="Rapid" totalMembers="1,234" />
    </ThemeX>
  )
}

export const communityCardSmall = () => {
  return (
    <ThemeX>
      <CommunityCardSmall
        title="Rapid"
        totalMembers="1,234"
      ></CommunityCardSmall>
    </ThemeX>
  )
}
