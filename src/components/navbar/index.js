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
          <li className="NavBar-list-item">
            <NavLink
              className="NavBar-list-signifier"
              to="/about">About</NavLink>
          </li>
          <li className="NavBar-list-item">
            <NavLink
              className="NavBar-list-signifier"
              to="/blog">Blog</NavLink>
          </li>
          <li className="NavBar-list-item">
            <NavLink
              className="NavBar-list-signifier"
              to="/contributions">Contributions</NavLink>
          </li>
          <li className="NavBar-list-item">
            <NavLink
              className="NavBar-list-signifier"
              to="/contact">Contact</NavLink>
          </li>
        </ul>
        <Route exact path="/about" />
        <Route path="/blog" />
        <Route path="/contributions" />
        <Route path="/contact" />
      </div>
    )
  }
}

export default NavBar
