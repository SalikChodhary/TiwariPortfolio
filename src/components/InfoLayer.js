import React from 'react'
import {Layer, Text, Box, Paragraph, Heading} from 'grommet'
import { toggleModal } from '../redux/actions'
import { connect } from 'react-redux'

function InfoLayer(props) {
  const test = "Salik\nSalik"
  return (
    // <div>OUHFSOUHFOUFHIUH</div>
    <Layer position="center" modal onClickOutside={() => props.toggle(props.modal)} onEsc={() => props.toggle(props.modal)}>
      <Box height="medium" width="medium" direction="column" pad="medium" overflow="auto">
        <Heading size="xxsmall">{props.modalTitle}</Heading>
        <Paragraph style={{whiteSpace: "pre-wrap"}}>{String(props.modalBody)}</Paragraph>
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
