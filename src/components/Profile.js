import React, { useEffect, useState } from 'react'
import {Box, Avatar, Heading, Paragraph, Text } from 'grommet'
import { createClient } from 'contentful'
import ExampleComponent from 'react-rounded-image';
import { Layer } from 'grommet-icons';
import '../App.css'



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
      {/* //style={{backgroundImage: `url(${back})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} */}
      <Box background="light-2" width="full" direction="column" align="center" flex={false} pad={{horizontal: "medium"}} overflow="auto">
          <Heading style={{display: "inline-block"}}>
            Ishika Tiwari
          </Heading>
        
        <div class="image-cropper">
          <img src={profilePic} alt="avatar" class="profile-pic" />
        </div>
        <Paragraph color="black" flex="true" style={{whiteSpace: "pre-wrap"}}>{String(profile)}</Paragraph>
      </Box>
    </div>
  )
}
