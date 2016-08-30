import React from 'react'
import NavigationBar from '../navigation-bar'
import Footer from '../footer'

var Container = React.createClass({
  render: function() {
    return (
      <div className="App-container">
        <NavigationBar
          pageTitle='Read'
          METADATA={this.props.navigationBarMeta}
        />
        { this.props.children }
        <Footer />
      </div>)
  }
})

export default Container