import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

import './index.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <ul className="NavBar-list">
          <li className="NavBar-list-link"><Link to="/">About</Link></li>
          <li className="NavBar-list-link"><Link to="/blog">Blog</Link></li>
          <li className="NavBar-list-link"><Link to="/contributions">Contributions</Link></li>
          <li className="NavBar-list-link"><Link to="/contact">Contact</Link></li>
        </ul>
        <Route exact path="/" />
        <Route path="/about" />
        <Route path="/topics" />
      </div>
    )
  }
}

export default NavBar
