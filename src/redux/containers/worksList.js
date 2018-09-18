import { connect } from 'react-redux'
import { getVisibleWorks } from '../selectors'
import { toggleWorksModal } from '../actions'
import ListOfWorks from '../../components/listOfWorks'


const mapStateToProps = state => ({
  filteredWorks: getVisibleWorks(state)
})

const mapDispatchToProps = (dispatch) => ({
  toggleWorksModal: () => dispatch(toggleWorksModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfWorks)
