import { Flex, Grid, IconButton, Image, Text } from '@chakra-ui/core'
import React from 'react'

interface emojis {
  name: string
  img: string
}

interface emojiCategory {
  category: string
  icon: any
  emojis: emojis[]
}

interface emojiSelectorProps {
  categories: emojiCategory[]
}

function yeet() {
  alert('uwu')
}

const EmojiSelector = (props: emojiSelectorProps) => (
  <Flex flexDirection="column" backgroundColor="#ffffff" overflow="scroll">
    <Flex alignItems="center" p={2} justifyContent="space-around">
      {props.categories.map((category: emojiCategory) => {
        return (
          <IconButton
            key={'emojiCatSelector_' + category.category}
            aria-label="icon"
            icon={category.icon}
            variant="ghost"
            variantColor="blackAlpha"
            onClick={yeet}
          />
        )
      })}
    </Flex>

    {props.categories.map((category: emojiCategory) => {
      return (
        <EmojiCategory
          key={'emojiCat_' + category.category}
          category={category.category}
          icon={category.icon}
          emojis={category.emojis}
        />
      )
    })}
  </Flex>
)
const EmojiCategory = (props: emojiCategory) => (
  <Flex flexDirection="column">
    <Text fontWeight="bold" p={3}>
      {props.category}
    </Text>
    <Grid templateColumns="repeat(9, 2fr)" gap={3} p={3}>
      {props.emojis.map((emoji: emojis) => {
        return (
          <Image
            key={'emojiPrev_' + emoji.name}
            height="30px"
            width="30px"
            htmlHeight="30px"
            htmlWidth="30px"
            src={emoji.img}
          />
        )
      })}
    </Grid>
  </Flex>
)

export default EmojiSelector
