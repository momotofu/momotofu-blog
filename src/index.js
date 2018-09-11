import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import App from './App'
import ScrollToTop from './components/scrollToTop'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>
), document.getElementById('root'))
registerServiceWorker()
