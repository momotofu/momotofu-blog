import React, { Component } from "react";
import BlogPost from "./blog-post/index.js"

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
