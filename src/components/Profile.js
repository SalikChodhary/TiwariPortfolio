import React, { useEffect, useState } from 'react'
import {Box, Avatar, Heading, Paragraph, Text } from 'grommet'
import { createClient } from 'contentful'
import ExampleComponent from 'react-rounded-image';
import { Layer } from 'grommet-icons';


const client = createClient({
  space: "wp95wkcd3e2s",
  accessToken: "8h3cXJm30rnmEVv2Llvb7UugbYAbnvQ2OYqvjrgs2Tk"
})

export default function Profile() {

  const [profilePic, setProfilePic] = useState(null);
  const [profile, setProfile] = useState("");
  useEffect(() => {
    client.getEntry('GHoxm1fnlBOTIcWI08pEO').then((response) => {
            //console.log(response.items)
            setProfilePic(response.fields.profilePicture.fields.file.url);
            setProfile(response.fields.profileDetails)
            //console.log(articles)
          });
  }, []);
  

  return (
    <div id="profile" style={{width: "100%"}}>
      <Box background="light-1" width="full" direction="column" align="center" flex="false">
        <Heading>
          First Last
        </Heading>
        <Box flex="false">
          <ExampleComponent image={profilePic} flex="true"/>
        </Box>
        <Paragraph color="black" flex="true">{profile}</Paragraph>
      </Box>
    </div>
  )
}
