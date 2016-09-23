import React, { PropTypes } from 'react'
import AccordionItem from './item'

require('./index.styl')

const Accordion = ({accordionItems, onItemClick}) => (
  <div className='Accordion-container'>
    {accordionItems.map((item, index) => {
      return (
        <AccordionItem
          key={index}
          {...item}
          onClick={() => onItemClick(index)}
        />
      )
    })}
  </div>
)

Accordion.propTypes = {
  accordionItems: PropTypes.arrayOf(PropTypes.shape({
  demoURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubURL: PropTypes.string.isRequired,
  language: PropTypes.string,
  open: PropTypes.bool.isRequired,
  tabLabel: PropTypes.string.isRequired,
  tabSubLabel: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default Accordion