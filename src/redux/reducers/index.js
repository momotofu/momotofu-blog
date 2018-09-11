import { combineReducers } from 'redux'
import worksVisibilityFilters from './worksVisibilityFilters'
import worksModal from './worksModal'
import works from './works'

const rootReducer = combineReducers({
  worksVisibilityFilters,
  worksModal,
  works
})

export default rootReducer
