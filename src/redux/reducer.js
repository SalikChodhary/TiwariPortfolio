import * as actionTypes from './actionTypes';


const initialState = {
  sidebar: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIDEBAR_TOGGLE: 
      return { 
        sidebar: action.current
      }
    default:
      return state;
  }
}

export default reducer;