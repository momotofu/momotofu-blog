import { TOGGLE_WORKS_MODAL } from '../constants/actionTypes'

const initialState = {
  isModalVisible: false
}

const worksModal = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_WORKS_MODAL:
      return Object.assign({}, state, {
        isModalVisible: !state.isModalVisible
      })
    default:
      return state
  }
}

export default worksModal
