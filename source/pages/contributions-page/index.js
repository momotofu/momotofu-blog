import React from "react"

import ContributionsPageAccordion from '../../containers/contributions-page-accordion'
import ContributionsPageAccordionFilter from '../../containers/contributions-page-accordion-filter'
require('./index.styl')

var ContributionsPage = React.createClass({

  render: function() {
    return (
      <div className='Contributions-container'>
        <div className='Contributions-accordion-filters'>
          <ContributionsPageAccordionFilter filter='SHOW_ALL'>
            All
          </ContributionsPageAccordionFilter>
          <ContributionsPageAccordionFilter filter='JAVASCRIPT'>
            Javascript
          </ContributionsPageAccordionFilter>
          <ContributionsPageAccordionFilter filter='PYTHON'>
            Python
          </ContributionsPageAccordionFilter>
          <ContributionsPageAccordionFilter filter='SCALA'>
            Scala
          </ContributionsPageAccordionFilter>
        </div>
        <ContributionsPageAccordion />
      </div>
    )
  }
})

export default ContributionsPage