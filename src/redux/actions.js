import * as actionTypes from './actionTypes'

export const toggleSidebar = (current) => {
  return {
    type: actionTypes.SIDEBAR_TOGGLE, 
    current: !current
  }
}