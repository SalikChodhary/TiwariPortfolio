import React, { useEffect, useState, useImperativeHandle } from 'react'
import { Box, Paragraph, Heading, Layer, Text } from 'grommet'
import Card from './Card'
import { createClient } from 'contentful'
import InfoLayer from './InfoLayer'
import { Info } from 'grommet-icons'
import { toggleModal } from '../redux/actions'
import { connect } from 'react-redux'

const client = createClient({
  space: "wp95wkcd3e2s",
  accessToken: "8h3cXJm30rnmEVv2Llvb7UugbYAbnvQ2OYqvjrgs2Tk"
})

function Education(props) {
  const [schools, setSchools] = useState([]);
  const [modal, setModal] = useState(false)
  
  useEffect(() => {
    client.getEntries({
      'content_type': 'education'
    }).then((response) => {
            let newSchools = response.items.map(item => item.fields)
            setSchools(newSchools);
          });
  }, []);


  return (
    <Box background="white" width="full" direction="column" align="center" flex="false">
      <Heading>Education</Heading>
      <Box background="white" width="full" direction="row" align="center" justify="center" flex="false">
        {schools.map((school, i) => <Card key={i} title={school.schoolName} image={school.relevantPicture.fields.file.url} body={school.relevantInformation}/>)}
      </Box>
      {props.modal && <InfoLayer />}
    </Box>
    
  )
}

function mapStateToProps(state) { 
  return { 
    modal: state.firstReducer.modal
  }
} 

export default connect(mapStateToProps)(Education)