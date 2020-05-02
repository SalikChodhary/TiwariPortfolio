import React from 'react'
import { Menu, Linkedin, Mail } from 'grommet-icons';
import {Box, Button, Text } from 'grommet'
import { toggleSidebar } from '../redux/actions'
import { connect } from 'react-redux'

function Header(props) {
  return (
    <Box
      gridArea="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: "medium", vertical: "small" }}
      background="white"
      elevation='medium'
    >
      <Button onClick={() => props.toggle(props.sidebar)}>
        <Menu size='large' color='black' />
      </Button>
      <Box gap='small' direction="row">
        <Linkedin />  
        <Mail />
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
