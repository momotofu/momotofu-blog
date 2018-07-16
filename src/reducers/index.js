import { combineReducers } from 'redux'
import accordion from './accordion'

const reducer = combineReducers({
  contributionsPageAccordion: accordion
})

export default reducer