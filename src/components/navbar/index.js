import React from 'react'
import {
  Route,
  Redirect,
  NavLink
} from 'react-router-dom'

import './index.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <ul className="NavBar-list">
          <li>
            <NavLink
              className="signifier"
              to="/about">About</NavLink>
          </li>
          <li>
            <NavLink
              className="signifier"
              to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink
              className="signifier"
              to="/contributions">Contributions</NavLink>
          </li>
          <li>
            <NavLink
              className="signifier"
              to="/contact">Contact</NavLink>
          </li>
        </ul>
        <Route exact path="/" render={() => (
            <Redirect to="/about"/>
        )}/>
        <Route exact path="/about" />
        <Route path="/blog" />
        <Route path="/contributions" />
        <Route path="/contact" />
      </div>
    )
  }
}

export default NavBar
