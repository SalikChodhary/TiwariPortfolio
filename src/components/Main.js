import React from 'react'
import {Box, Avatar, Text} from 'grommet'

import logo from '../logo.svg'
import Profile from './Profile'
import Education from './Education'

export default function Main() {
  return (
    <Box gridArea="main" align="center" justify="between" overflow="auto">
      <Profile /> 
      <Education />
      {/* <Box background="dark-2" flex={false}>
        <Avatar size='xxlarge' src={logo}/>
      </Box>
      <Box flex={false}>
        <Avatar size='xxlarge' src={logo}/>
        <Text>FUDOAUFAHOFUHFOUHFOUHFOUSHAOUFHOUFHOUFH</Text>
      </Box> */}
    </Box>
  )
}
