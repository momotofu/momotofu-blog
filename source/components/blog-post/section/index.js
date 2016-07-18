import React from "react";
require('./index.styl')

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.paragraphs = this.props.bodyCopy.map((paragraph, index) => {
      return (
        <p className="BlogPost-section-paragraph hyphenate" key={index}>
          {paragraph}
        </p>
      )
    })
  }
  render() {
    return (
      <div className="BlogPost-section-container">
        <h2 className="BlogPost-section-heading"> {this.props.headingCopy} </h2>
        {this.paragraphs}
      </div>
    )
  }
}