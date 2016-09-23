import React from 'react'
import { Router, Route, Link, IndexRoute, browserHistory, Redirect, hashHistory} from 'react-router'

import MomotofuPage from './pages/momotofu-page'
import ContributionsPage from './pages/contributions-page'
import ContactPage from './pages/contact-page'
import AppContainer from './components/app-container'
import BlogPosts from './components/blog-posts'
import '../utils/hyphenate.js'

require('./root-styles/index.styl')

// const store = createStore(reducer)

var App = React.createClass({
  getInitialState: function() {
    return {routerState: {prevState: '', nextState: ''}}
  },
  getChildContext: function() {
    return {routerState: this.state.routerState}
  },
  update: function(prevState, nextState) {
    this.setState({
      routerState: { prevState: prevState.location.pathname, nextState: nextState.location.pathname}
    })
  },
  render: function() {
    return (
      <Router history={ browserHistory }>
        <Route onChange={ this.update } path='/' component={ AppContainer }>
          <Route path='/momotofu' component={ MomotofuPage }/>
          <Route path='/blog' component={ BlogPosts }/>
          <Route path='/contributions' component={ ContributionsPage }/>
          <Route path='/contact' component={ ContactPage }/>
        </Route>
      </Router>
    )
  }
})

App.childContextTypes = {
  routerState: React.PropTypes.object
}

export default App