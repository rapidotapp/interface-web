import { Flex, Input, InputGroup, InputRightAddon } from '@chakra-ui/core'
import { Field, Formik } from 'formik'
import React from 'react'
import { Smile } from 'react-feather'

const MessageBar = (props) => {
  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values, { resetForm }) => {
        if (values.message) {
          props.onSubmit(values.message)
        }
        values.message = ''
        resetForm()
      }}
    >
      {(props) => (
        <Flex
          padding="16px 12px"
          justify="center"
          align="center"
          bg="red.50"
          h="84px"
          bottom={0}
        >
          <InputGroup
            bg="red.100"
            w="100%"
            h="52px"
            borderRadius="5px"
            border="1px solid #FC8181"
            outline="none"
            placeholder="Message #general"
            color="red.300"
          >
            <form onSubmit={props.handleSubmit} style={{ width: '100%' }}>
              <Field name="newTodo" w="100%">
                {({ field }) => (
                  <Input
                    {...field}
                    bg="red.100"
                    w="100%"
                    h="52px"
                    placeholder="Message #general"
                    color="red.300"
                    borderColor="red.300"
                    focusBorderColor="red.300"
                    id="message"
                    name="message"
                    value={props.values.message || ''}
                    _placeholder={{
                      color: 'red.300',
                    }}
                  ></Input>
                )}
              </Field>
            </form>
            <InputRightAddon bg="red.300" h="100%">
              <Smile color="white" />
            </InputRightAddon>
          </InputGroup>
        </Flex>
      )}
    </Formik>
  )
}

export default MessageBar
