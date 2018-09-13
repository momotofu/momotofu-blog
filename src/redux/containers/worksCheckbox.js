import { connect } from 'react-redux'
import {
  toggleWorksVisibilityFilter
} from '../actions'
import WorksCheckbox from '../../components/checkbox'

const mapStateToProps = (state, ownProps) => {
  return {
  isChecked: state.worksVisibilityFilters.filters.indexOf(ownProps.label) !== -1
}}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (event) => {
    dispatch(toggleWorksVisibilityFilter(ownProps.label))
  }
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorksCheckbox)
