import React from "react";
require('./index.styl')

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="BlogPost-image-container">
        <img src="..." />
      </div>
    )
  }
}