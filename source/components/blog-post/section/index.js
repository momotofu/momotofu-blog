import React from "react";
require('./index.styl')

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    console.info(props);
  }
  render() {
    return (
      <div>
        <h2 className="Section-heading"> {this.props.heading} </h2>
        <p className="Section-body"> {this.props.body}</p>
      </div>
    )
  }
}