import { combineReducers } from 'redux'
import {
  TOGGLE_ACCORDION_ITEM,
  SET_ACCORDION_VISIBILITY_FILTER,
  LANGUAGE_VISIBILITY_FILTERS
} from '../actions'

const SHOW_ALL = LANGUAGE_VISIBILITY_FILTERS.SHOW_ALL

const items = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_ACCORDION_ITEM:
      return state.map((item) => {
        if (item.tabLabel !== action.id)
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

const filter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_ACCORDION_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const accordion = combineReducers({
  items,
  filter
})

export default accordion