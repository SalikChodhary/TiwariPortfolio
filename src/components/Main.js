import React from 'react'
import {Box, Avatar, Text, Button} from 'grommet'
import {Menu, Mail, Linkedin} from 'grommet-icons'

import logo from '../logo.svg'
import Profile from './Profile'
import Education from './Education'
import Experience from './Experience'
import Header from './Header'
import DataLayout from './DataLayout'
import Footer from './Footer'

export default function Main() {
  return (
    <Box gridArea="main" align="center" justify="between" overflow="auto" background="light-2">
      <Profile /> 
      {/* <Education />
      <Experience /> */}
      {["education", "experience", "achievements"].map((query, i) => <div id={query} style={{width: "100%"}} key={i}><DataLayout contentQuery={query} key={i} /></div>)}
      <br />
      <Footer />
    </Box>
  )
}
