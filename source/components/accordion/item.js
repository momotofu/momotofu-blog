import React, { PropTypes } from 'react'

require('./index.styl')

const AccordionItem = ({
  tabLabel,
  tabSubLabel,
  onClick,
  open,
  demoURL,
  githubURL,
  description
}) => (
  <div className='Accordion-item'>
    <div className='Accordion-item-tab'>
      <h4 className='Accordion-item-tab-label'>
        {tabLabel}
      </h4>
      <h6 className='Accordion-item-tab-subLabel'>
        {tabSubLabel}
      </h6>
      <button
        onClick={onClick}
      >
        { open ? 'CLOSE' : 'OPEN' }
      </button>
    </div>
    <a href={demoURL}>Demo</a>
    <a href={githubURL}>Github</a>
    <p className='Accordion-description'>
      {description}
    </p>
  </div>
)

AccordionItem.propTypes = {
  tabLabel: PropTypes.string.isRequired,
  tabSubLabel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  demoURL: PropTypes.string.isRequired,
  githubURL: PropTypes.string.isRequired
}

export default AccordionItem