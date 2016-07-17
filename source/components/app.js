import React, { Component } from 'react'
import BlogPost from './blog-post/index.js'
import '../hyphenate.js'
require('./root-styles/index.styl')

export default class App extends Component {
  constructor(props) {
    super(props);

    this.BLOGPOSTDATA = require('../../api/blog-posts.json')
    this.blogPosts = this.BLOGPOSTDATA.map((POSTDATA) => {
      return (
        <BlogPost POSTDATA={POSTDATA} key={POSTDATA.meta.UUID} />
      );
    });
  }

  render() {
    return (
      <div>
        {this.blogPosts}
      </div>
    );
  }
}

