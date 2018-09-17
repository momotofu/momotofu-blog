import React from 'react'
import './index.css'
import WorksVisibilityFilters from '../../redux/containers/worksFilters'
import WorksList from '../../redux/containers/worksList'

class WorksPage extends React.Component {
  /**
   * Work Page
   *
   * state:
   *
   * component props are:
   */

  // lifecycle methods
  componentDidMount() {
  }

  componentWillUnmount() {
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
      </div>
    )
  }
}

export default WorksPage
