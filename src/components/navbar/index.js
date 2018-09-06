import React from 'react'
import {
  NavLink
} from 'react-router-dom'

import './index.css'
import { toggleIsActiveOn } from '../../utils'

class NavBar extends React.Component {
  /**
   * NavLink Component
   *
   * state: None
   *
   * component props are:
   * - navLinks: an array of strings that will be used to render links to
   *   pages.
   */

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

  renderNavLinks() {
    return this.props.navLinks.map((pageName, index) => {
      return (
          <li key={ index }>
            <NavLink
              className="signifier"
              to={ `/${pageName.toLowerCase()}` }
              isActive={ this.handleNavLinkClick.bind(this) }>{ `${pageName}` }</NavLink>
          </li>
      )
    })
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
          { this.renderNavLinks() }
        </ul>
      </div>
    )
  }
}

export default NavBar
