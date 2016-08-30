import React from "react"
import { Link } from 'react-router'
require('./index.styl')
var classNames = require('classnames')

var NavigationBar = React.createClass({
  componentWillReceiveProps: function(nextProps, nextContext) {
    var routerState = nextContext.routerState
    this.sortLinks(routerState.nextState.substr(1))
  },
  componentWillMount: function() {
    var links = ['momotofu', 'blog', 'about', 'contributions', 'contact']
    this.setState({
      links: links.map((value, i) => {
        return (
           <Link
            to={'/' + value}
            activeClassName='NavigationBar-signifier-active'
            className='NavigationBar-signifier'
            key={value}
            >
            {value}
          </Link>
        )
      })
    })
  },
  componentDidMount: function() {
    this.sortLinks(window.page)
  },
  removeArrayItem: function(array, index) {
    return array.slice(0, index)
      .concat(array.slice(index + 1))
  },
  sortLinks: function(linkId) {
    var links = this.state.links
    var newLinks
    var activeLinkIndex
    var activeLink

    links.forEach((n, i) => {
      if (n.key === linkId) {
        activeLinkIndex = i
        return
      }
    })
    if (activeLinkIndex == 0)
      return
    activeLink = links[activeLinkIndex]
    links = this.removeArrayItem(links, activeLinkIndex)
    links.sort((a, b) => {
      return a.key < b.key
    })
    links.unshift(activeLink)

    this.setState({
      links: links
    })
  },
  render: function() {
    return (
      <div className='NavigationBar-spacer'>
        <div className='NavigationBar-container'>
          {this.state.links}
          {/*<h1 className='NavigationBar-signifier'>{this.props.METADATA.title}</h1>*/}
        </div>
      </div>
    )
  }
})

NavigationBar.contextTypes = {
  routerState: React.PropTypes.object
}

export default NavigationBar

