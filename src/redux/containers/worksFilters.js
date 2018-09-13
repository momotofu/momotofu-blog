import { connect } from 'react-redux'
import {
  toggleWorksVisibilityFilters
} from '../actions'
import ListOfFilters from '../../components/listOfFilters'


const mapStateToProps = state => ({
  isShowing: state.worksVisibilityFilters.showFilters
})


const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleIsShowing: () => dispatch(toggleWorksVisibilityFilters()),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfFilters)
