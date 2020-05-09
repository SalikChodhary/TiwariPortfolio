import React from 'react'
import { Box, Button, Text } from 'grommet'
import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'
import { User, Book, Briefcase, Achievement} from 'grommet-icons'

import '../App.css'

export default function Sidebar() {
  const capitalize = (str) => { 
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const addIcon = (name) => { 
    switch (name) {
      case "profile":
        return <User />
      case "education":
        return <Book />
      case "experience": 
        return <Briefcase />
      case "achievements":
        return <Achievement />
    
      default:
        break;
    }
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
      elevation="medium"
      align='left'
      width="auto"
      justify="center"
      overflow="auto"
    >
      <Router>
        {["profile", "education", "experience", "achievements"].map(name => (
          
          <Link to={"/#" + name}>
            <Button key={name} hoverIndicator fill="horizontal" margin="small">
              <Box pad={{vertical: "small" }} direction="row" gap="small">
                {addIcon(name)}
                <Text color='black' size="large">{capitalize(name)}</Text>
              </Box>
            </Button>
          </Link>
        ))}
      </Router>
    </Box>
  )
}
