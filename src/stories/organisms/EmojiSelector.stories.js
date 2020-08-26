import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import EmojiSelector from '../../components/organisms/EmojiSelector'
import ThemeX from '../../components/theme'
import { emojis } from '../../util/dummyData'

export default { title: 'Organisms.EmojiSelector' }

export const emojiSelector = () => {
  return (
    <ThemeX>
      <Router>
        <EmojiSelector categories={emojis} />
      </Router>
    </ThemeX>
  )
}
