import React, { Component } from 'react'
import BlogPost from './blog-post'
import NavigationBar from './navigation-bar'
import Footer from './footer'
import '../hyphenate.js'
require('../root-styles/index.styl')
require('./index.styl')

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

    this.blogPosts = this.BLOGPOSTDATA.map((POSTDATA, i) => {
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
  }

  render() {
    return (
      <div className="App-container">
        <NavigationBar
          pageTitle='Read'
          METADATA={this.state.navigationBarMeta}
        />
        {this.blogPosts}
        <Footer />
      </div>
    )
  }
}