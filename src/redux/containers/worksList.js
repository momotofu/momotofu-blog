import { connect } from 'react-redux'
import { getVisibleWorks } from '../selectors'
import ListOfWorks from '../../components/listOfWorks'


const mapStateToProps = state => ({
  filteredWorks: getVisibleWorks(state)
})

export default connect(
  mapStateToProps
)(ListOfWorks)
