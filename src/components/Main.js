import React from 'react'
import {Box, Avatar, Text} from 'grommet'
import logo from '../logo.svg'
import Profile from './Profile'

export default function Main() {
  return (
    <Box  align="center" overflow="auto">
      <Profile />
    </Box>
  )
}
