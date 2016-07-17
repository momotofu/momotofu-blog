import React from "react";
import Section from "./section"
require('./index.styl');


export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    console.log('POSTDATA', this.props.POSTDATA.abstract[0]);
  }
  render() {
    return (
      <div className="BlogPost-container">
        <Section bodyCopy={this.props.POSTDATA.abstract} />
      </div>
    );
  }
};