import * as actionTypes from './actionTypes'

export const toggleSidebar = (current) => {
  return {
    type: actionTypes.SIDEBAR_TOGGLE, 
    current: !current
  }
}
export const toggleModal = (current) => { 
  return{
    type: actionTypes.MODAL_TOGGLE, 
    current: !current
  }
}
export const setModalBody = (body) => {
  return{ 
    type: actionTypes.SET_MODAL_BODY,  
    body
  }
}
export const setModalTitle = (title) => { 
  return { 
    type: actionTypes.SET_MODAL_TITLE, 
    title
  }
}