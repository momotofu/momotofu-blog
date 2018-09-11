import { combineReducers } from 'redux'
import worksVisibilityFilters from './worksVisibilityFilters'
import worksModal from './toggleModal'

const rootReducer = combineReducers({
  worksVisibilityFilters,
  worksModal
})

export default rootReducer
