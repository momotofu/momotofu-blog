import React from "react"
import { Link } from 'react-router'
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
          <Link to="/" className='NavigationBar-signifier'>Momotofu</Link>
          <Link to="/blog" className='NavigationBar-signifier'>Blog</Link>
          <Link to="/about" className='NavigationBar-signifier'>About</Link>
          <Link to="/contributions" className='NavigationBar-signifier'>Contributions</Link>
          <Link to="/contact" className='NavigationBar-signifier'>Contact</Link>
          {/*<h1 className='NavigationBar-signifier'>{this.props.METADATA.title}</h1>*/}
        </div>
      </div>
    )
  }
}

export default NavigationBar