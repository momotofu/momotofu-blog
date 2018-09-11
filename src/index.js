import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import App from './App'
import rootReducer from './redux/reducers'
import ScrollToTop from './components/scrollToTop'
import registerServiceWorker from './registerServiceWorker'
import {
  addWorksVisibilityFilter,
  removeWorksVisibilityFilter,
  toggleWorksVisibilityFilters,
  toggleWorksModal
} from './redux/actions'

import * as worksFilters from './redux/constants/worksFilters'

const store = createStore(rootReducer)


console.log('state: ', store.getState(), worksFilters)
store.dispatch(toggleWorksVisibilityFilters())
store.dispatch(addWorksVisibilityFilter(worksFilters.JAVASCRIPT))
store.dispatch(addWorksVisibilityFilter(worksFilters.PYTHON))
store.dispatch(removeWorksVisibilityFilter(worksFilters.JAVASCRIPT))
//store.dispatch(removeWorksVisibilityFilter(worksFilters.JAVASCRIPT))
console.log('state: ', store.getState())

ReactDOM.render((
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>
), document.getElementById('root'))
registerServiceWorker()
