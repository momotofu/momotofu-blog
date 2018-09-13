import { connect } from 'react-redux'
import {
  toggleWorksVisibilityFilter
} from '../actions'
import WorksCheckbox from '../../components/checkbox'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(toggleWorksVisibilityFilter(ownProps.label))
})


export default connect(
  null,
  mapDispatchToProps
)(WorksCheckbox)
