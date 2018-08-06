import React from 'react'
import {
  Route,
  NavLink
} from 'react-router-dom'

import './index.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <ul className="NavBar-list">
          <li className="NavBar-list-link"><NavLink to="/">About</NavLink></li>
          <li className="NavBar-list-link"><NavLink to="/blog">Blog</NavLink></li>
          <li className="NavBar-list-link"><NavLink to="/contributions">Contributions</NavLink></li>
          <li className="NavBar-list-link"><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <Route exact path="/" />
        <Route path="/about" />
        <Route path="/topics" />
      </div>
    )
  }
}

export default NavBar
