import React from 'react'
import {Box, Avatar, Text, Button} from 'grommet'
import {Menu, Mail, Linkedin} from 'grommet-icons'

import logo from '../logo.svg'
import Profile from './Profile'
import Education from './Education'
import Experience from './Experience'
import Header from './Header'
import DataLayout from './DataLayout'

export default function Main() {
  return (
    <Box gridArea="main" align="center" justify="between" overflow="auto" >
      <Profile /> 
      {/* <Education />
      <Experience /> */}
      {["education", "experience", "achievements"].map((query, i) => <div id={query} style={{width: "100%"}}><DataLayout contentQuery={query} key={i} /></div>)}
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
