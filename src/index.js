import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import App from './App'
import rootReducer from './redux/reducers'
import ScrollToTop from './components/scrollToTop'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(rootReducer)

if (process.env.NODE_ENV !== 'production') {
  const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )
}

ReactDOM.render((
  <Router>
    <ScrollToTop>
      <Provider store={ store }>
        <App />
      </Provider>
    </ScrollToTop>
  </Router>
), document.getElementById('root'))
registerServiceWorker()
