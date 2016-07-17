import React from "react"
import Section from "./section"
import Hero from "./hero"
require('./index.styl')

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="BlogPost-container">
        <Section
          headingCopy={this.props.POSTDATA.abstract.label}
          bodyCopy={this.props.POSTDATA.abstract.copy}
        />
        <Hero IMAGEDATA={this.props.POSTDATA.illustration} />
        <Section
          headingCopy={this.props.POSTDATA.body.label}
          bodyCopy={this.props.POSTDATA.body.copy}
        />
      </div>
    )
  }
}