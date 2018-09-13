import React from 'react'
import './index.css'
import { generateRandomIDHash } from '../../utils'
import WorksCheckbox from '../../redux/containers/worksCheckbox'

class ListOfFilters extends React.Component {
  /**
   * Renders a list of checkboxes. Checkboxes when check send
   * actions to a list of filters.
   *
   * component props are:
   */

  renderFilters() {
    return this.props.filters.map((filter, index) => {
      return (
        <WorksCheckbox
          label={ filter }
          key={ index + generateRandomIDHash() } />
      )
    })
  }

  animateFilterPanel() {
    this.props.toggleIsShowing()
  }

  render() {
    const text = this.props.isShowing ? 'Hide filters' : 'Show filters'
    return (
      <div className="Filters">
        <button onClick={ this.animateFilterPanel.bind(this) } >{text}</button>
        <div className="Filters-panel">
          { this.renderFilters() }
        </div>
      </div>
    )
  }
}

export default ListOfFilters
