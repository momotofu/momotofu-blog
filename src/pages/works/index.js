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
      <div className="row">
        <WorksVisibilityFilters filters={ ['JavaScript', 'Python', 'Java'] } />
        <WorksList />
      </div>
    )
  }
}

export default WorksPage
