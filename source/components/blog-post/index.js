import React from "react";
var css = require('./index.styl');

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={css.BlogPost-container}>
      </div>
    );
  }
};