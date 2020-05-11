import React, { useState, useEffect } from 'react'
import { Box, Avatar, Image, Text } from 'grommet'
import logo from '../logo.svg'
import { toggleModal, setModalBody, setModalTitle } from '../redux/actions'
import { connect } from 'react-redux'
import { Car } from 'grommet-icons'


function Card(props) {
  const handleClick = () => {
    props.setModalTitle(props.title)
    props.setModalBody(props.body)
    props.toggle(props.modal)
  }
  const loadFallback = (e) => { 
    e.target.src = logo;
  }
  return (
    <Box background="white" direction="column" elevation="medium" flex={false} width="medium" height ="medium" margin="small" justify="start" hoverIndicator onClick={handleClick} >
      
      <div style={{maxWidth: "90%", minWidth:"90%",  maxHeight: "80%", minHeight: "80%", margin: "5%"}}>
        <img onError={loadFallback} src={props.image} style={{objectFit: "fill", maxWidth: "100%", minWidth:"100%",  maxHeight: "100%", minHeight: "100%", backgroundColor: "white"}} />   
      </div>
      
      {/* <Image src={props.school.relevantPicture.fields.file.url} fit="contain" fill="horizontal" /> */}
      <Box basis="1/4" pad={{horizontal: "small"}}>
        <Text weight="bold" textAlign="center" truncate={true}>{props.title}</Text>
      </Box>
    </Box>
  )
}
function mapStateToProps(state) { 
  return { 
    modal: state.firstReducer.modal
  }
} 

const mapDispatchToProps = dispatch => {
  return { 
    toggle: (current) => dispatch(toggleModal(current)), 
    setModalBody: (body) => dispatch(setModalBody(body)), 
    setModalTitle: (title) => dispatch(setModalTitle(title))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)
