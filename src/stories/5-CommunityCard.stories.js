import React from 'react'
import ThemeX from '../components/theme'
import CommunityCard from '../components/CommunityCard'
import CommunityCardSmall from '../components/CommunityCardSmall'

export default { title: 'Cards' }

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
