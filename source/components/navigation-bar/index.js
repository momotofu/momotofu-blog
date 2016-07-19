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

        </div>
      </div>
    )
  }
}

export default NavigationBar