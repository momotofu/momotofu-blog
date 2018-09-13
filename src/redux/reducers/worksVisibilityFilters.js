import {
  ADD_WORKS_VISIBILITY_FILTER,
  REMOVE_WORKS_VISIBILITY_FILTER,
  TOGGLE_WORKS_VISIBILITY_FILTER,
  TOGGLE_WORKS_VISIBILITY_FILTERS
} from '../constants/actionTypes'

const initialState = {
  filters: [],
  showFilters: false
}

const addWorksFilter = (state, action) => {
  return Object.assign({}, state, {
    filters: state.filters.concat(action.filter)
  })
}

const removeWorksFilter = (state, action) => {
  return Object.assign({}, state, {
    filters: state.filters.filter(filter =>
      filter !== action.filter)
  })
}

const worksVisibilityFilters = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORKS_VISIBILITY_FILTER:
      if (state.filters.indexOf(action.filter) === -1)
        return addWorksFilter(state, action)
      else
        return state
    case REMOVE_WORKS_VISIBILITY_FILTER:
      if (state.filters.indexOf(action.filter) !== -1)
        return removeWorksFilter(state, action)
      else
        return state
    case TOGGLE_WORKS_VISIBILITY_FILTER:
      if (state.filters.indexOf(action.filter) === -1)
        return addWorksFilter(state, action)
      else
        return removeWorksFilter(state, action)
    case TOGGLE_WORKS_VISIBILITY_FILTERS:
      return Object.assign({}, state, {
        showFilters: !state.showFilters
      })
    default:
      return state
  }
}

export default worksVisibilityFilters
