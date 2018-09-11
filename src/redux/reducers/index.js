import { combineReducers } from 'redux'
import worksVisibilityFilter from './worksVisibilityFilter'
import toggleModal from './toggleModal'

const rootReducer = combineReducers({
  worksVisibilityFilter,
  toggleModal
})

export default rootReducer
