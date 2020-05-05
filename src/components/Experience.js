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

function Experience(props) {
  const [experiences, setExperiences] = useState([]);
  
  useEffect(() => {
    client.getEntries({
      'content_type': 'experience'
    }).then((response) => {
            let newExperiences = response.items.map(item => {
              let image = item.fields.relevantPicture === undefined ? '../logo.svg' : item.fields.relevantPicture
              return {title: item.fields.experienceTitle, 
                      body: item.fields.relevantInformation, 
                      image: image}
            })
            setExperiences(newExperiences);
          });
  }, []);


  return (
    <Box background="white" width="full" direction="column" align="center" flex="false">
      <Heading>Education</Heading>
      <Box background="white" width="full" direction="row" align="center" justify="center" flex="false">
        {console.log(experiences)}
        {experiences.map((experience, i) => (<Card key={i} title={experience.title} image={experience.image} body={experience.body}/>))}
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

export default connect(mapStateToProps)(Experience)