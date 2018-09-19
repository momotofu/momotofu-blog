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
          className="WorksModal-button WorksModal-button-exit"
          onClick={ this.exitButtonClickHandler.bind(this) }>
          <span className="underline">Back</span>
      </button>
        <div className="WorksModal-description-panel">
        </div>
      </div>
    )
  }
}

export default WorksModal
