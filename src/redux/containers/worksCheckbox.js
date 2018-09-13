import { connect } from 'react-redux'
import {
  toggleWorksVisibilityFilter
} from '../actions'
import WorksCheckbox from '../../components/checkbox'


const mapStateToProps = (state, ownProps) => ({
  isChecked: state.worksVisibilityFilters.filters.indexOf(ownProps.filter) !== -1
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(toggleWorksVisibilityFilter(ownProps.label))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorksCheckbox)
