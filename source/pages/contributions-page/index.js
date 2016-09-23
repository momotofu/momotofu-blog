import React from "react"

import ContributionsPageAccordion from '../../containers/contributions-page-accordion'
require('./index.styl')

var ContributionsPage = React.createClass({

  render: function() {
    return (
      <div className='Contributions-container'>
        <ContributionsPageAccordion />
      </div>
    )
  }
})

export default ContributionsPage