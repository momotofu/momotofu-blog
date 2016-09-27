import { connect } from 'react-redux'
import { setAccordionVisibilityFilter } from '../actions'
import Link from '../components/link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.contributionsPageAccordion.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setAccordionVisibilityFilter(ownProps.filter))
    }
  }
}

const contributionsPageAccordionFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default contributionsPageAccordionFilter