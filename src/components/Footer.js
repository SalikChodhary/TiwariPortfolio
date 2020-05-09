import React from 'react'
import { Box, Text, Button } from 'grommet'
import { LinkTop } from 'grommet-icons'
import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'

export default function Footer() {
  return (
    <Box background="dark-1" width="full" direction="column" align="center" flex={false}>
      <Router>
        <Link to="/#profile">
          <Button hoverIndicator fill="horizontal" margin="small" default >
            <Box justify="center" direction="row" pad="small" gap="small">
              <Text size="medium" color="white">{"Go back to top   "}</Text>
              <LinkTop size="medium" />
            </Box>
          </Button>
        </Link>
      </Router>
    </Box>
  )
}
