import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

import './index.scss'

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contributions">Contributions</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Route exact path="/" />
        <Route path="/about" />
        <Route path="/topics" />
      </div>
    )
  }
}

export default NavBar
