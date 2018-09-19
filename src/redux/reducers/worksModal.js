import { TOGGLE_WORKS_MODAL } from '../constants/actionTypes'

const initialState = {
  isModalVisible: false,
  activeWorkID: -1
}

const worksModal = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_WORKS_MODAL:
      return Object.assign({}, state, {
        isModalVisible: !state.isModalVisible,
        activeWorkID: action.activeWorkID
      })
    default:
      return state
  }
}

export default worksModal
