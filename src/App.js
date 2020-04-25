import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Button, Box, Text, Avatar} from 'grommet';
import { Menu, Linkedin, Mail } from 'grommet-icons';



function App() {

  const [sidebar, setSidebar] = useState(false);
  return (
    <Grid
        fill
        rows={["auto", "flex"]}
        columns={["auto", "flex"]}
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "sidebar", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] }
        ]}
      >
        <Box
          gridArea="header"
          direction="row"
          align="center"
          justify="between"
          pad={{ horizontal: "medium", vertical: "small" }}
          background="white"
          elevation='medium'
        >
          <Button onClick={() => setSidebar(!sidebar)}>
            <Menu size='large' color='black' />
          </Button>
          <Text size='xlarge' color='black'>Personal Website</Text>
          <Box gap='small' direction="row">
            <Linkedin />  
            <Mail />
          </Box> 
        </Box>
        {sidebar && (
          <Box
            gridArea="sidebar"
            background="white"
            width="small"
            animation={[
              { type: "fadeIn", duration: 300 },
              { type: "slideRight", size: "xlarge", duration: 150 }
            ]}
            elevation='medium'
            align='center'
          >
            {["First", "Second", "Third"].map(name => (
              <Button key={name} href="#" hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }} >
                  <Text color='black'>{name}</Text>
                </Box>
              </Button>
            ))}
          </Box>
        )}
        <Box gridArea="main" justify="center" align="center">
          <Avatar size='xlarge' src={logo}/>
          <Text>FUDOAUFAHOFUHFOUHFOUHFOUSHAOUFHOUFHOUFH</Text>
        </Box>
      </Grid>
  );
}

export default App;

// import React, { Component } from "react";
// import { render } from "react-dom";
// import { createClient } from "contentful";


// var client = createClient({
//   space: "wp95wkcd3e2s",
//   accessToken:
//     "8h3cXJm30rnmEVv2Llvb7UugbYAbnvQ2OYqvjrgs2Tk"
// });

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       article: []
//     };
//   }

//   componentDidMount() {
//     client.getEntries().then(({ items }) => {
//       this.setState({ article: items });
//       console.log(this.state.article)
//     });
//   }

//   render() {
//     return (
//       <div>
        
//         Content goes here
//       </div>
//     );
//   }
// }

// export default App;

