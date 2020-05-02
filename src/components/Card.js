import React, { useState, useEffect } from 'react'
import { Box, Avatar, Image, Text } from 'grommet'
import logo from '../logo.svg'


export default function Card(props) {
  return (
    <Box direction="column" elevation="medium" flex="false" width="medium" height ="medium" margin="small" justify="start" hoverIndicator onClick={() => console.log("audhf")}>
      {/* <Box basis="3/4" flex="false" >
        <Image src={props.image} fit="cover" />
      </Box> */}
      
      <div style={{maxWidth: "90%", minWidth:"90%",  maxHeight: "80%", minHeight: "80%", margin: "5%"}}>
        <img src={props.image} style={{objectFit: "fill", maxWidth: "100%", minWidth:"100%",  maxHeight: "100%", minHeight: "100%"}} />   
      </div>
      
      {/* <Image src={props.school.relevantPicture.fields.file.url} fit="contain" fill="horizontal" /> */}
      <Box basis="1/4">
        <Text weight="bold" textAlign="center">{props.title}</Text>
      </Box>
    </Box>
  )
}
