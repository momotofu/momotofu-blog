import React from 'react'
import NavigationBar from '../navigation-bar'
import Footer from '../footer'

require('./index.styl')

var Container = React.createClass({
  render: function() {
    return (
      <div className="App-container">
        <NavigationBar
          pageTitle='Read'
          METADATA={this.props.navigationBarMeta}
        />
        <div className='App-content'>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
})

export default Container