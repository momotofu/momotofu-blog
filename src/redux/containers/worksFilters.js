import { connect } from 'react-redux'
import {
  toggleWorksVisibilityFilters,
  clearWorksVisibilityFilters
} from '../actions'
import ListOfFilters from '../../components/listOfFilters'


const mapStateToProps = state => ({
  isShowing: state.worksVisibilityFilters.showFilters,
  hasFilter: state.worksVisibilityFilters.filters.length > 0
})


const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleIsShowing: () => dispatch(toggleWorksVisibilityFilters()),
  clearFilters: () => dispatch(clearWorksVisibilityFilters())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfFilters)
