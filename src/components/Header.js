import React from 'react'
import { Menu, Linkedin, Mail } from 'grommet-icons';
import {Box, Button, Text } from 'grommet'
import { toggleSidebar } from '../redux/actions'
import { connect } from 'react-redux'
import back from '../test2.jpeg'

function Header(props) {
  return (
    <Box
      elevation='medium'
      gridArea="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: "medium", vertical: "small" }}
      // background="dark-1"
      style={{backgroundImage: `url(${back})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
    >
      <Button onClick={() => props.toggle(props.sidebar)}>
        <Menu size='large' color="white"/>
      </Button>
      <Box gap='small' direction="row" >
        <a href="https://www.linkedin.com/in/salik-chodhary-495751142/"><Linkedin color="white"/></a>
        <a href="mailto:ishika.tiwari86@gmail.com"><Mail color="white"/></a>
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
