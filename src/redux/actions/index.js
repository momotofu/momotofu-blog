import * as types from '../constants/actionTypes'

export const toggleWorksModal = () => ({ type: types.TOGGLE_WORKS_MODAL })

export const addWorksVisibilityFilter = filter => ({
  type: types.ADD_WORKS_VISIBILITY_FILTER,
  filter
})
export const removeWorksVisibilityFilter = filter => ({
  type: types.REMOVE_WORKS_VISIBILITY_FILTER,
  filter
})
export const toggleWorksVisibilityFilters = () => ({
  type: types.TOGGLE_WORKS_VISIBILITY_FILTERS
})

