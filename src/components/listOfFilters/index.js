import React from 'react'
import './index.css'

class ListOfFilters extends React.Component {
  /**
   * Renders a list of checkboxes. Checkboxes when check send
   * actions to a list of filters.
   *
   * component props are:
   */

  render() {
    const text = this.props.isShowing ? 'Hide filters' : 'Show filters'
    return (
      <div className="Filters">
        <button onClick={ this.props.toggleIsShowing } >{text}</button>
        <div className="Filters-panel">
        </div>
      </div>
    )
  }
}

export default ListOfFilters
