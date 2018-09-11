import {
  ADD_WORKS_VISIBILITY_FILTER,
  REMOVE_WORKS_VISIBILITY_FILTER,
  TOGGLE_WORKS_VISIBILITY_FILTERS
} from '../constants/actionTypes'

const initialState = {
  filters: [],
  showFilters: false
}

const worksVisibilityFilters = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORKS_VISIBILITY_FILTER:
      if (state.filters.indexOf(action.filter) === -1)
        return Object.assign({}, state, {
          filters: state.filters.concat(action.filter)
        })
      else
        return state
    case REMOVE_WORKS_VISIBILITY_FILTER:
      if (state.filters.indexOf(action.filter) !== -1)
        return Object.assign({}, state, {
          filters: state.filters.filter(filter =>
            filter !== action.filter)
        })
      else
        return state
    case TOGGLE_WORKS_VISIBILITY_FILTERS:
      return Object.assign({}, state, {
        showFilters: !state.showFilters
      })
    default:
      return state
  }
}

export default worksVisibilityFilters
