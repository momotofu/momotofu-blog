import React from "react"
require('./index.styl')
var classNames = require('classnames')

class Section extends React.Component {
  constructor(props) {
    super(props)
    this.paragraphClasses = () => {
      if (this.props.options) {
        return classNames({
          'BlogPost-section-list': this.props.options.list ? this.props.options.list : false,
          'BlogPost-section-list-bulleted': this.props.options.bulleted ? this.props.options.bulleted : false,
          'BlogPost-section-list-spaced': this.props.options.listSpaced ? this.props.options.listSpaced : false,
          'BlogPost-section-italic': this.props.options.italic ? this.props.options.italic : false,
          'BlogPost-section-small': this.props.options.small ? this.props.options.small : false,
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
    this.headingClasses = () => {
      if (this.props.options) {
        return classNames({
          'BlogPost-section-heading-small': this.props.options.small ? this.props.options.small : false,
          'BlogPost-section-heading': true
        })
      }
      else
        return classNames({'BlogPost-section-heading': true})
    }
    this.heading = () => {
      if (this.props.headingCopy)
        return <h2 className={this.headingClasses()}> {this.props.headingCopy} </h2>
      else
        return
    }
    this.paragraphs = this.props.bodyCopy.map((paragraph, index) => {
      return (
        <p className={this.paragraphClasses()} key={index}>
          {paragraph}
        </p>
      )
    })
  }
  render() {
    return (
      <div className="BlogPost-section-container">
        {this.heading()}
        {this.paragraphs}
      </div>
    )
  }
}

Section.propTypes = {
  options:  React.PropTypes.objectOf(React.PropTypes.bool)
}

export default Section
