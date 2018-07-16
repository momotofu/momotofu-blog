import { connect } from 'react-redux'
import { toggleAccordionItem } from '../actions'
import Accordion from '../components/accordion'

const defaultItem = [{
  "demoURL": "#",
  "description": "Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor.",
  "githubURL": "#",
  "language": "javascript",
  "open": false,
  "tabLabel": "Coming soon",
  "tabSubLabel": "Language example"
  }]

const getVisibleAccordionItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'JAVASCRIPT':
      return items.filter(n => n.language === 'javascript')
    case 'PYTHON':
      return items.filter(n => n.language === 'python')
    case 'SCALA':
      return items.filter(n => n.language === 'scala')
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => {
  const items = getVisibleAccordionItems(state.contributionsPageAccordion.items, state.contributionsPageAccordion.filter)

  return {
    accordionItems: items.length > 1 ? items : defaultItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      dispatch(toggleAccordionItem(id))
    }
  }
}

const ContriutionsPageAccordion = connect(
  mapStateToProps,
  mapDispatchToProps
)(Accordion)

export default ContriutionsPageAccordion