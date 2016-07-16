import React from "react";
require('./index.styl')

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 className="Section-heading"> {this.props.headingCopy} </h2>
        <p className="Section-body"> {this.props.bodyCopy}</p>
      </div>
    )
  }
}