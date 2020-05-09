import React from 'react'
import {Layer, Text, Box, Paragraph, Heading, Button} from 'grommet'
import { toggleModal } from '../redux/actions'
import { connect } from 'react-redux'

function InfoLayer(props) {
  return (
    // <div>OUHFSOUHFOUFHIUH</div>
    <Layer position="center" modal onClickOutside={() => props.toggle(props.modal)} onEsc={() => props.toggle(props.modal)}>
      <Box height="medium" width="medium" direction="column" gap="small" pad="small" justify="between">
        <Box justify="start">
          <Heading size="xxsmall" textAlign="center">{props.modalTitle}</Heading>
          <Box overflow="auto" >
            <Paragraph style={{whiteSpace: "pre-wrap"}}>{String(props.modalBody)}</Paragraph>
          </Box>
        </Box>
        
        
        <Button
          label={
            <Text color="white">
              <strong>Continue</strong>
            </Text>
          }
          onClick={() => props.toggle(props.modal)}
          primary
          color="#6699ff"
          style={{position: "static"}}
        />
      </Box>
    </Layer>
  )
}
function mapStateToProps(state) { 
  return { 
    modal: state.firstReducer.modal,
    modalBody: state.firstReducer.modalBody, 
    modalTitle: state.firstReducer.modalTitle
  }
} 

const mapDispatchToProps = dispatch => {
  return { 
    toggle: (current) => dispatch(toggleModal(current))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoLayer)
