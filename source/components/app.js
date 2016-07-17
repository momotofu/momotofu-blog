import React, { Component } from 'react'
import BlogPost from './blog-post/index.js'
require('./root-styles/index.styl')

var blogPosts = require('../../api/blog-posts.json')
console.log("blogPosts from app:", blogPosts)

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BlogPost blogPosts={this.blogPosts} />
      </div>
    );
  }
}
