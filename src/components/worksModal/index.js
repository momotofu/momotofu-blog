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

  componentDidUpdate() {
    if (this.props.isShowing) {
      // prevent background from scrolling
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
    } else {
      // allow background to scroll again
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'relative'
    }
  }

  exitButtonClickHandler() {
    this.props.toggleModal()
    console.log(this.props.work)
  }

  render() {
    return (
      <div className={ `WorksModal ${ this.props.isShowing ? '' : 'd-none' }` }>
        <div className="WorksModal-bg"></div>
        <button
          className="WorksModal-button WorksModal-button-exit"
          onClick={ this.exitButtonClickHandler.bind(this) }>
          <span className="underline">Back</span>
      </button>
      <div className="WorksModal-panel WorksModal-panel-description">
      </div>
        <div className="WorksModal-panel"></div>
      </div>
    )
  }
}

export default WorksModal
