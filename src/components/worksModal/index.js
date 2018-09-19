import React from 'react'
import './index.css'

class WorksModal extends React.Component {
  /**
   * WorksModal
   *
   * component props are:
   * isShowing:
   * activeWorkID
   */

  exitButtonClickHandler() {
    this.props.toggleModal()
  }

  render() {
    return (
      <div className={ `WorksModal ${ this.props.isShowing ? '' : 'd-none' }` }>
        <button
          className="WorksModal-button-exit"
          onClick={ this.exitButtonClickHandler.bind(this) }>Back</button>
      </div>
    )
  }
}

export default WorksModal
