import { connect } from 'react-redux'
import { getVisibleWorks } from '../selectors'
import { toggleWorksModal } from '../actions'
import WorksList from '../../components/listOfWorks'


const mapStateToProps = state => ({
  filteredWorks: getVisibleWorks(state)
})

const mapDispatchToProps = (dispatch) => ({
  toggleWorksModal: (workID) => dispatch(toggleWorksModal(workID))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorksList)
