import React from 'react'
import {Box, Avatar, Text} from 'grommet'

import logo from '../logo.svg'
import Profile from './Profile'
import Education from './Education'
import Experience from './Experience'
import DataLayout from './DataLayout'

export default function Main() {
  return (
    <Box gridArea="main" align="center" justify="between" overflow="auto">
      <Profile /> 
      {/* <Education />
      <Experience /> */}
      {["education", "experience"].map((query, i) => <DataLayout contentQuery={query} key={i} />)}
      {/* <DataLayout contentQuery="education" />
      <DataLayout contentQuery="experience" /> */}
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
