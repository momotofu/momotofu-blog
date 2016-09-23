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
      <div className='Accordion-item-tab-label'>
        <h4 className='Accordion-item-tab-label-title'>
          {tabLabel}
        </h4>
        <h6 className='Accordion-item-tab-label-sub'>
          {tabSubLabel}
        </h6>
      </div>
      <button
        className={'Accordion-item-tab-signifier Accordion-signifier' + (open ? ' Accordion-item-tab-signifier-open' : '')}
        onClick={onClick}
      />
    </div>
    <div
      className={'Accordion-item-description' + (open ? ' Accordion-item-description-open' : '')}
    >
      <a className="Accordion-signifier Accordion-item-signifier" href={demoURL}>Demo</a>
      <a className="Accordion-signifier Accordion-item-signifier" href={githubURL}>Github</a>
      <p className="Accordion-item-paragraph">
      {description}
      </p>
    </div>
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