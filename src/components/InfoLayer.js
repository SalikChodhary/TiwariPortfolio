import React from 'react'
import {Layer, Text, Box} from 'grommet'
import { toggleModal } from '../redux/actions'
import { connect } from 'react-redux'

function InfoLayer(props) {
  return (
    // <div>OUHFSOUHFOUFHIUH</div>
    <Layer position="center" modal onClickOutside={() => props.toggle(props.modal)} onEsc={() => props.toggle(props.modal)}>
      <Box height="large"><Text>{props.modalBody}</Text></Box>
      
      {console.log(props.modalBody, props.modalTitle)}
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
