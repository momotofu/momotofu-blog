import React, { Component } from 'react';
import BlogPost from './blog-post/index.js'
require('./root-styles/index.styl')

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BlogPost />
      </div>
    );
  }
}
