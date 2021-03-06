import React from 'react'
import './index.css'
import WorksVisibilityFilters from '../../redux/containers/worksFilters'
import WorksList from '../../redux/containers/worksList'
import WorksModal from '../../redux/containers/worksModal'
import { wakeUpHerokuServers } from '../../utils'

class WorksPage extends React.Component {
  /**
   * Work Page
   *
   * state:
   *
   * component props are:
   */

  // lifecycle methods
  componentWillMount() {
    wakeUpHerokuServers(window.$)
  }

  render() {
    return (
      <div className="container-nested">
        <div className="row pt-5">
          <WorksVisibilityFilters
            filters={
              ['JavaScript', 'Python', 'Java', 'Open Source', 'Swift', 'Contract']
            } />
        </div>
        <WorksList className="row" />
        <WorksModal />
      </div>
    )
  }
}

export default WorksPage
