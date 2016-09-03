import React from "react"
import { Link } from 'react-router'
require('./index.styl')
var classNames = require('classnames')

var Momotofu = React.createClass({

  render: function() {
    return (
      <div className='Momotofu-container'>
        <div className='Momotofu-hero'>
          <h1 className='Momotofu-hero-greeting'>こんにちわ</h1>
          <img className='Momotofu-hero-image' src="images/hero.gif"/>
        </div>
      </div>
    )
  }
})

export default Momotofu