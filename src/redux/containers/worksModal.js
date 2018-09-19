import { connect } from 'react-redux'
import WorksModal from '../../components/worksModal'
import { toggleWorksModal } from '../actions'

const mapStateToProps = state => ({
  isShowing: state.worksModal.isModalVisible,
  work: state.works.filter((work) => {
    return work.title === state.worksModal.activeWorkID
  })
})

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleWorksModal(null))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorksModal)
