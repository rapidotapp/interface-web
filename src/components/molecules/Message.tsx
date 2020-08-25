import { Box, Flex, Image, Text } from '@chakra-ui/core'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'

interface messageProps {
  from: string
  iconURL: string
  time: string
  message: string
  replies: number
  replyIcon: string
}

class CodeBlock extends React.Component<{ language: string; value: string }> {
  render() {
    const { language, value } = this.props
    return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
  }
}

const Message = (props: messageProps) => {
  return (
    <Flex w="100%" direction="column" marginY="18px" bg="red">
      <Flex>
        <Image
          src={props.iconURL}
          w="50px"
          h="50px"
          borderRadius="25px"
          marginRight="10px"
        />
        <Box>
          <Flex align="center">
            <Text fontSize="sm" as="b" marginRight="10px">
              {props.from}
            </Text>
            <Text fontSize="xs" color="gray.400">
              {props.time}
            </Text>
          </Flex>
          <Text>
            <ReactMarkdown
              source={props.message}
              renderers={{
                code: CodeBlock,
              }}
            />
          </Text>
          {props.replies > 0 && (
            <Flex marginTop="10px" align="center">
              <Image
                src={props.replyIcon}
                w="30px"
                h="30px"
                borderRadius="5px"
                marginRight="10px"
              />
              <Text fontSize="sm" as="b">
                {props.replies} {props.replies === 1 ? 'reply' : 'replies'}
              </Text>
            </Flex>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}

export default Message
