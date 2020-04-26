import React, { useState } from 'react';
import './App.css';
import { Grid, Box } from 'grommet';

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

import { connect } from 'react-redux'



function App(props) {

  //const [sidebar, setSidebar] = useState(false);
  return (
    // <Grid
    //     fill
    //     rows={["auto", "flex"]}
       
    //     columns={["auto", "flex"]}
    //     areas={[
    //       { name: "header", start: [0, 0], end: [1, 0] },
    //       { name: "sidebar", start: [0, 1], end: [0, 1] },
    //       { name: "main", start: [1, 1], end: [1, 1] }
    //     ]}
    //   >
    <Grid fill rows={["auto", "flex"]}>
        
        <Header /> 
        <Box direction="row" justify="start" >
          {props.sidebar && <Sidebar />}
          <Main />
        </Box>
        
      </Grid>
  );
}

function mapStateToProps(state) { 
  return { 
    sidebar: state.firstReducer.sidebar
  }
} 

export default connect(mapStateToProps)(App)


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

