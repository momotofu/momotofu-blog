import React from "react"
require('./index.styl')

export default class IsVisibleSensor extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = function(isVisible) {
      props.isVisible(isVisible)
    }
  }

  render() {
    var VisibilitySensor = require('react-visibility-sensor')
    return (
      <div className="BlogPost-sensor-container" ref="container">
        <VisibilitySensor
          containment={this.refs.container}
          partialVisibility={true}
          minTopValue={400}
          onChange={this.onChange}>
          <div className="BlogPost-sensor" />
        </VisibilitySensor>
        {this.props.children}
      </div>
    )
  }
}