import React from 'react'
import { Menu, Linkedin, Mail } from 'grommet-icons';
import {Box, Button, Text } from 'grommet'
import { toggleSidebar } from '../redux/actions'
import { connect } from 'react-redux'

function Header(props) {
  return (
    <Box
      elevation='medium'
      gridArea="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: "medium", vertical: "small" }}
      background="white"
    >
      <Button onClick={() => props.toggle(props.sidebar)}>
        <Menu size='large' />
      </Button>
      <Box gap='small' direction="row" >
        <a href="https://www.linkedin.com/in/salik-chodhary-495751142/"><Linkedin /></a>
        <a href="mailto:ishika.tiwari86@gmail.com"><Mail /></a>
      </Box> 
    </Box>
  )
}

function mapStateToProps(state) { 
  return { 
    sidebar: state.firstReducer.sidebar
  }
} 

const mapDispatchToProps = dispatch => {
  return { 
    toggle: (current) => dispatch(toggleSidebar(current))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
