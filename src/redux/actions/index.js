import * as types from '../constants/actionTypes'

export const toggleWorksModal = (activeWorkID) => ({
  type: types.TOGGLE_WORKS_MODAL,
  activeWorkID
})

export const addWorksVisibilityFilter = filter => ({
  type: types.ADD_WORKS_VISIBILITY_FILTER,
  filter
})
export const removeWorksVisibilityFilter = filter => ({
  type: types.REMOVE_WORKS_VISIBILITY_FILTER,
  filter
})
export const toggleWorksVisibilityFilter = filter => ({
  type: types.TOGGLE_WORKS_VISIBILITY_FILTER,
  filter
})
export const toggleWorksVisibilityFilters = () => ({
  type: types.TOGGLE_WORKS_VISIBILITY_FILTERS
})
export const clearWorksVisibilityFilters = () => ({
  type: types.CLEAR_WORKS_VISIBILITY_FILTERS
})
