import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import BlogPost from './blog-post'
import NavigationBar from './navigation-bar'
import Footer from './footer'
import '../hyphenate.js'

require('../root-styles/index.styl')
require('./index.styl')

var color = require('../../utils/tofu-color.js')

export default class App extends Component {
  constructor(props) {
    super(props)
    this.BLOGPOSTDATA = require('../../api/blog-posts.json')

    this.state = {
      navigationBarMeta: this.BLOGPOSTDATA[0].meta
    }

    this.getNavigationBarMeta = function(POSTMETADATA) {
      this.setState({ navigationBarMeta: POSTMETADATA })
    }

    this.posts = this.BLOGPOSTDATA.map((POSTDATA, i) => {
      var isLast = i === this.BLOGPOSTDATA.length - 1
      return (
        <BlogPost
          POSTDATA={POSTDATA}
          key={POSTDATA.meta.UUID}
          bubbleMetaData={this.getNavigationBarMeta.bind(this)}
          isLast={isLast}
        />
      )
    })

    this.BlogPosts = (props) => {
      return (
        <div>
          { this.posts }
        </div>
      )
    }

    this.Container = (props) => {
      return (
        <div className="App-container">
          <NavigationBar
            pageTitle='Read'
            METADATA={this.state.navigationBarMeta}
          />
          { props.children }
          <Footer />
        </div>)
    }
  }

  getChildContext() {
    return { color: color }
  }

  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ this.Container }>
          <Route path='/blog' component={ this.BlogPosts }/>
        </Route>
      </Router>
    )
  }
}

App.childContextTypes = {
  color: React.PropTypes.object
};