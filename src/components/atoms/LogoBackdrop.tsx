import React from 'react'
import { Box, Image } from '@chakra-ui/core'
import rapidLogo from '../../assets/img/logo.png'
import { commonShadow, smallBorderRadius } from '../common'

interface ILogobackdrop {
  children?: React.ReactDOM
  [key: string]: any
}

export default function LogoBackdrop({ children, ...props }: ILogobackdrop) {
  return (
    <Box
      background="#262626"
      boxShadow={commonShadow}
      borderRadius={smallBorderRadius}
      {...props}
    >
      <Image src={rapidLogo} width="75px" height="75px" alt="Rapid Logo" />
    </Box>
  )
}
