import React from "react"
require('./index.styl')
var classNames = require('classnames')

class Section extends React.Component {
  constructor(props) {
    super(props)
    this.classes = () => {
      if (this.props.options) {
        return classNames({
          'list': this.props.options.list ? this.props.options.list : false,
          'bulleted': this.props.options.bulleted ? this.props.options.bulleted : false,
          'italic': this.props.options.italic ? this.props.options.italic : false,
          'BlogPost-section-paragraph': true,
          'hyphenate': true
        })
      }
      else {
        return classNames({
          'BlogPost-section-paragraph': true,
          'hyphenate': true
        })
      }
    }
    this.paragraphs = this.props.bodyCopy.map((paragraph, index) => {
      return (
        <p className={this.classes()} key={index}>
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

Section.propTypes = {
  options:  React.PropTypes.objectOf(React.PropTypes.bool)
}

export default Section
