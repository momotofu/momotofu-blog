import * as types from '../constants/actionTypes'

export const toggleModal => ({ type: types.TOGGLE_MODAL })
export const addWorksVisibilityFilter = filter => ({
  type: types.ADD_WORKS_VISIBILITY_FILTER,
  filter
})
export const addWorksVisibilityFilter = filter => ({
  type: types.REMOVE_WORKS_VISIBILITY_FILTER,
  filter
})
