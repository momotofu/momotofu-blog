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
          bodyCopy={this.props.POSTDATA.primer.copy}
          options={{'list': true}}
        />
        <Section
          headingCopy={this.props.POSTDATA.connections.label}
          bodyCopy={this.props.POSTDATA.connections.copy}
          options={{'list': true,'bulleted': true}}
        />
        <Section
          headingCopy={this.props.POSTDATA.abstract.label}
          bodyCopy={this.props.POSTDATA.abstract.copy}
          options={{'list': true}}
        />
        <Hero IMAGEDATA={this.props.POSTDATA.illustration} />
        <Section
          headingCopy={this.props.POSTDATA.body.label}
          bodyCopy={this.props.POSTDATA.body.copy}
        />
        <Section
          headingCopy={this.props.POSTDATA.review.label}
          bodyCopy={this.props.POSTDATA.review.copy}
          options={{'list': true}}
        />
        <Section
          headingCopy={this.props.POSTDATA.references.label}
          bodyCopy={this.props.POSTDATA.references.copy}
          options={{'list': true, 'small': true, 'listSpaced': true}}
        />
      </div>
    )
  }
}