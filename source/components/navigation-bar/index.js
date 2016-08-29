import React from "react"
import { Link } from 'react-router'
require('./index.styl')
var classNames = require('classnames')

var NavigationBar = React.createClass({
  componentWillMount: function() {
    var links = ['/', 'blog', 'about', 'contributions', 'contact']
    this.setState({
      links: links.map((value, i) => {
        var label = ''
        if (value == '/')
          label = 'Momotofu'
        else
          label = value
        return (
           <Link
            to={value}
            activeClassName='NavigationBar-signifier-active'
            className='NavigationBar-signifier'
            key={value}
            onClick={this.sortLinks.bind(null, value)}>
            {label}
          </Link>
        )
      })
    })
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
      if (n.key === linkId)
        activeLinkIndex = i
    })
    if (activeLinkIndex == 0)
      return

    activeLink = links[activeLinkIndex]
    links = this.removeArrayItem(links, activeLinkIndex)
    links.unshift(activeLink)
    console.log('links: ', links)
    this.setState({
      links: links
    })
  },
  render: function() {
    return (
      <div className='NavigationBar-spacer'>
        <div className='NavigationBar-container' ref='nav'>
          {this.state.links}
          {/*<h1 className='NavigationBar-signifier'>{this.props.METADATA.title}</h1>*/}
        </div>
      </div>
    )
  }
})

export default NavigationBar

