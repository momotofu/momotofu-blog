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
      </div>
    )
  }
}

export default NavBar
