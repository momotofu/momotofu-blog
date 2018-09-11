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

const store = createStore(rootReducer)

ReactDOM.render((
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>
), document.getElementById('root'))
registerServiceWorker()
