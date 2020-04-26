import React from 'react'
import { Box, Button, Text } from 'grommet'
import '../App.css'

export default function Sidebar() {
  return (
    <Box
      //className="Side"
      //full="false"
      //gridArea="sidebar"
      background="white"
      width="small"
      animation={[
        { type: "fadeIn", duration: 300 },
        { type: "slideRight", size: "xlarge", duration: 150 }
      ]}
      elevation='medium'
      align='center'
    >
      {["First", "Seconddddddddd", "Third"].map(name => (
        <Button key={name} href="#" hoverIndicator>
          <Box pad={{ horizontal: "medium", vertical: "small" }} >
            <Text color='black'>{name}</Text>
          </Box>
        </Button>
      ))}
    </Box>
  )
}
