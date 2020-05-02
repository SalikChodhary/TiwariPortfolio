import * as actionTypes from './actionTypes';
import { act } from 'react-dom/test-utils';
import { setModalContent } from './actions';


const initialState = {
  sidebar: false, 
  modal: false,
  modalBody: "INITIAL", 
  modalTitle: "INITIAL"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIDEBAR_TOGGLE: 
      return { 
        sidebar: action.current
      }
    case actionTypes.MODAL_TOGGLE:
      return{
        ...state, 
        modal: action.current
      }
    case actionTypes.SET_MODAL_BODY: 
      return{
        ...state, 
        modalBody: action.body
      }
    case actionTypes.SET_MODAL_TITLE: 
      return { 
        ...state,
        modalTitle: action.title
      }
    default:
      return state;
  }
}

export default reducer;