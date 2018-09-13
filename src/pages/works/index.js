import React from 'react'
import './index.css'
import WorksVisibilityFilters from '../../redux/containers/worksFilters'

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
      </div>
    )
  }
}

export default WorksPage
