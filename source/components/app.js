import React from 'react'
import { Router, Route, Link, IndexRoute, browserHistory, Redirect, hashHistory} from 'react-router'
import Momotofu from './momotofu'
import AppContainer from './app-container'
import BlogPosts from './blog-posts'
import '../hyphenate.js'
require('../root-styles/index.styl')
require('./index.styl')

var App = React.createClass({
  sendRouterStateToNav: function(prevState, nextState) {
    console.log('prev: ', prevState, 'next: ', nextState)
  },
  onChange: function(prevState, nextState, replace, callback) {
    this.sendRouterStateToNav(prevState.location.pathname, nextState.location.pathname)
  },
  render: function() {
    return (
      <Router history={ browserHistory }>
        <Route onChange={this.onChange} path='/' component={ AppContainer }>
          <Route path='/momotofu' component={ Momotofu }/>
          <Route path='/blog' component={ BlogPosts }/>
          <Route path='/about' component={ Momotofu }/>
          <Route path='/contributions' component={ Momotofu }/>
          <Route path='/contact' component={ Momotofu }/>
        </Route>
      </Router>
    )
  }
})

export default App