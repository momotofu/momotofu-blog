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
    case ADD_WORKS_VISBILITY_FILTER:
      if (state.indexOf(action.filter) === -1)
        return object.assign({}, state, {
          filters: state.filters.push(action.filter)
        })
      else
        return state
    case REMOVE_WORKS_VISIBILITY_FILTER:
      if (state.indexOf(action.filter) !== -1)
        return object.assign({}, state, {
          filters: state.filters.splice(state.indexOf(action.filter), 1)
        })
      else
        return state
    case TOGGLE_WORKS_VISBILITY_FILTERS:
      return object.assign({}, state, {
        showFilters: !state.showFilters
      })
    default:
      return state
  }
}

export default worksVisbilityFilters
