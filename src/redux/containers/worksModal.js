import { connect } from 'react-redux'
import WorksModal from '../../components/worksModal'
import { toggleWorksModal } from '../actions'

const mapStateToProps = state => ({
  isShowing: state.worksModal.isModalVisible,
  activeWorkID: state.worksModal.activeWorkID
})

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleWorksModal(null))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorksModal)
