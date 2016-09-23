import { connect } from 'react-redux'
import { toggleAccordionItem } from '../actions'
import Accordion from '../components/accordion'

const mapStateToProps = (state) => {
  return {
    accordionItems: state.contributionsPageAccordion
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