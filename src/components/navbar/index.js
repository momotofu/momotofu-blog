import React from 'react'
import {
  Route,
  Redirect,
  NavLink
} from 'react-router-dom'

import './index.css'

class NavBar extends React.Component {
  handleHamburgerClick(event) {
    event.stopPropagation()
    event.preventDefault()

    const hamburger = event.target
    const classes = hamburger.className.split(' ')

    if (classes.includes('isActive')) {
      hamburger.className = classes.filter(item => item != 'isActive')
    } else {
      hamburger.className = classes.concat('isActive').join(' ')
    }

  }

  render() {
    return (
      <div className="NavBar">
        <div className="NavBar-hamburger">
          <div
            className="NavBar-hamburger-middle"
            onClick={ this.handleHamburgerClick }>
          </div>
        </div>
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
