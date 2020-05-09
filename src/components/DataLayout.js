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
  const [data, setData] = useState([]);
  const capitalize = (str) => { 
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    client.getEntries({
      'content_type': String(props.contentQuery)
    }).then((response) => {
            let newData = response.items.map(item => {
              let image = item.fields.image === undefined ? '../logo.svg' : item.fields.image.fields.file.url
              return {title: item.fields.title, 
                      body: item.fields.body, 
                      image}
            })
            setData(newData);
          });
  }, []);


  return (
    <Box background="light-2" width="full" direction="column" align="center" flex={false}>
      <Heading>{capitalize(props.contentQuery)}</Heading>
      <Box background="light-2" width="full" direction="row" align="start" justify="center" flex={true} wrap={true}>
        
        {data.map((item, i) => (<Card key={i} title={item.title} image={item.image} body={item.body}/>))}
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