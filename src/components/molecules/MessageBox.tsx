import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/core'
import React from 'react'
import { Camera, File, Image, PlusCircle, Smile } from 'react-feather'

export default function MessageBox() {
  return (
    <InputGroup roundedRight="md" size="md">
      <InputLeftAddon height="4rem">#{'channel'}</InputLeftAddon>
      <Input height="4rem" type="text" placeholder="Send a message!" />
      <InputRightElement minWidth="7rem" alignContent="right" height="100%">
        <Popover usePortal>
          <PopoverTrigger>
            <Button variant="ghost">
              <Smile />
            </Button>
          </PopoverTrigger>
          <PopoverContent zIndex={4}>
            <PopoverArrow />
            <PopoverHeader>Reactions</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button variantColor="blue">Button</Button>
            </PopoverBody>
            <PopoverFooter>
              <Flex justifyContent="space-between">
                <Button>Add Emoji</Button>
                <Camera />
              </Flex>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
        <Popover usePortal>
          <PopoverTrigger>
            <Button variant="ghost">
              <PlusCircle />
            </Button>
          </PopoverTrigger>
          <PopoverContent width="6rem" zIndex={4}>
            <PopoverArrow />
            <PopoverHeader>
              <Button variant="ghost">
                <Image />
              </Button>
              <Button variant="ghost">
                <File />
              </Button>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </InputRightElement>
    </InputGroup>
  )
}
