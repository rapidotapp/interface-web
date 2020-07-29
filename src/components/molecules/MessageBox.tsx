import React from 'react'
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  InputLeftAddon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverHeader,
  PopoverFooter,
} from '@chakra-ui/core'
import { Camera, Image, PlusCircle, Smile, File } from 'react-feather'

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
