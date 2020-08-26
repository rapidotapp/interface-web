import { Divider, Flex, Grid, IconButton, Image, Text } from '@chakra-ui/core'
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
  <Flex
    width={350}
    height={400}
    flexDirection="column"
    backgroundColor="#ffffff"
    overflow="scroll"
  >
    <Flex alignItems="center" p={1} justifyContent="space-around">
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
    <Divider orientation="horizontal" />
    <Flex flexDirection="column" overflow="scroll">
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
          <Flex
            key={'emojiPrevFlex_' + emoji.name}
            alignItems="center"
            justifyContent="space-around"
            width={30}
            height={30}
            onMouseOver={yeet}
          >
            <Image
              key={'emojiPrev_' + emoji.name}
              htmlHeight="20px"
              htmlWidth="20px"
              src={emoji.img}
            />
          </Flex>
        )
      })}
    </Grid>
  </Flex>
)

export default EmojiSelector
