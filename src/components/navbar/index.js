import React from 'react'
import {
  NavLink
} from 'react-router-dom'

import './index.css'
import { toggleIsActiveOn } from '../../utils'

class NavBar extends React.Component {
  componentDidMount() {
    this.hamburger = document.getElementsByClassName('NavBar-hamburger-middle')[0]
    this.navBarList = document.getElementsByClassName('NavBar-list')[0]
  }

  handleHamburgerClick(event) {
    event.stopPropagation()
    event.preventDefault()

    toggleIsActiveOn(this.hamburger)
    toggleIsActiveOn(this.navBarList)
  }

  handleNavLinkClick(match) {
    if (this && this.hamburger && this.navBarList) {
      this.hamburger.classList.remove('isActive')
      this.navBarList.classList.remove('isActive')
    }

    if (!match)
      return false
    else
      return true
  }

  render() {
    return (
      <div className="NavBar">
        <div
          className="NavBar-hamburger"
          onClick={ this.handleHamburgerClick.bind(this) }>
          <div className="NavBar-hamburger-middle">
          </div>
        </div>
        <ul className="NavBar-list">
          <li>
            <NavLink
              className="signifier"
              to="/about"
              isActive={ this.handleNavLinkClick.bind(this) }>About</NavLink>
          </li>
          <li>
            <NavLink
              className="signifier"
              to="/blog"
              isActive={ this.handleNavLinkClick.bind(this) }>Blog</NavLink>
          </li>
          <li>
            <NavLink
              className="signifier"
              to="/contributions"
              isActive={ this.handleNavLinkClick.bind(this) }>Contributions</NavLink>
          </li>
          <li>
            <NavLink
              className="signifier"
              to="/contact"
              isActive={ this.handleNavLinkClick.bind(this) }>Contact</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar
