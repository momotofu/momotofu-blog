import React from "react";
require('./index.styl')

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="BlogPost-section-container">
        <h2 className="BlogPost-section-heading"> {this.props.headingCopy} </h2>
        <p className="BlogPost-section-body hyphenate"> {this.props.bodyCopy}</p>
      </div>
    )
  }
}