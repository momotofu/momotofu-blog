import React from "react"
require('./index.styl')
var classNames = require('classnames')

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return(
      <div className='NavigationBar-spacer'>
        <div className='NavigationBar-container'>
          <h1 className='NavigationBar-signifier'>{this.props.METADATA.title}</h1>
        </div>
      </div>
    )
  }
}

export default NavigationBar