import React, { useEffect, useState } from 'react'
import {Box, Avatar, } from 'grommet'
import { createClient } from 'contentful'
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
  // if (articles === null) { 
  //   client.getEntries().then(({ items }) => {
  //     setArticles({ articles: items });
  //     console.log(articles)
  //   });
  // }
  

  return (
    <Box direction="column" align="center">
      <img src={profilePic} />
      <p>{profile}</p>
    </Box>
  )
}
