import React from 'react'
import { Router, Route, Link, IndexRoute, browserHistory, Redirect, hashHistory} from 'react-router'
import Momotofu from './momotofu'
import AppContainer from './app-container'
import BlogPosts from './blog-posts'
import ContactPage from './contact-page'
import '../hyphenate.js'

require('../root-styles/index.styl')

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
          <Route path='/momotofu' component={ Momotofu }/>
          <Route path='/blog' component={ BlogPosts }/>
          <Route path='/contributions' component={ Momotofu }/>
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