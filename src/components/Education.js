import React, { useEffect, useState } from 'react'
import { Box, Paragraph, Heading } from 'grommet'
import Card from './Card'
import { createClient } from 'contentful'

const client = createClient({
  space: "wp95wkcd3e2s",
  accessToken: "8h3cXJm30rnmEVv2Llvb7UugbYAbnvQ2OYqvjrgs2Tk"
})

export default function Education() {
  const [schools, setSchools] = useState([]);
  
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
        {schools.map((school, i) => <Card key={i} title={school.schoolName} image={school.relevantPicture.fields.file.url} />)}
        {console.log(schools)}
      </Box>
    </Box>
  )
}
