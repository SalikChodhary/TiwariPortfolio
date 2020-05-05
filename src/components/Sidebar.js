import React from 'react'
import { Box, Button, Text } from 'grommet'
import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'

import '../App.css'

export default function Sidebar() {
  const capitalize = (str) => { 
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <Box
      //className="Side"
      //full="false"
      gridArea="sidebar"
      background="white"
      width="small"
      animation={[
        { type: "fadeIn", duration: 300 },
        { type: "slideRight", size: "xlarge", duration: 150 }
      ]}
      elevation='medium'
      align='center'
      flex={false}
      justify="center"
    >
      <Router>
        {["profile", "education", "experience", "achievements"].map(name => (
          <Link to={"/#" + name}>
            <Button key={name} hoverIndicator>
              <Box pad={{ horizontal: "medium", vertical: "small" }} >
                <Text color='black' size="large">{capitalize(name)}</Text>
              </Box>
            </Button>
          </Link>
        ))}
      </Router>
    </Box>
  )
}
