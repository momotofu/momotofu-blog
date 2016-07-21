import React from "react"
require('./index.styl')
var classNames = require('classnames')

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)

    this.props.updateNavigationBarMeta
  }
  render() {
    return(
      <div className='NavigationBar-spacer'>
        <div className='NavigationBar-container'>
          <h1>{this.state.category}</h1>
        </div>
      </div>
    )
  }
}

export default NavigationBar