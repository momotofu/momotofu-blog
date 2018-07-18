import React from "react";
require('./index.styl')

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="BlogPost-hero-container">
        <div className="BlogPost-hero-wrapper">
          <img
            src={this.props.IMAGEDATA.source}
            alt={this.props.IMAGEDATA.label}
            />
        </div>
        <h6 className="BlogPost-hero-attribution">
          {this.props.IMAGEDATA.creator}
        </h6>
      </div>
    )
  }
}