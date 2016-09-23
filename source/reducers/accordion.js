import { TOGGLE_ACCORDION_ITEM } from '../actions'

const accordion = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_ACCORDION_ITEM:
      return state.map((item, index) => {
        if (index !== action.id)
          return {
            ...item,
            open: false
          }
        return {
          ...item,
          open: !item.open
        }
      })
    default:
      return state
  }
}

export default accordion