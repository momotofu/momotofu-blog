import React from 'react'
import { generateRandomIDHash } from '../../utils'
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
  }

  renderPills(work) {
    return work.tags.map((tag, index) => {
      return (
        <span
          className="Works-card-pill WorksModal-pill"
          key={ index + 'span' + generateRandomIDHash() }>
          { work.tags[index] }
        </span>
      )
    })
  }

  render() {
    // return if no initial work is active
    const work = this.props.work[0]
    if (!work) return <div></div>

    return (
      <div className={ `WorksModal ${ this.props.isShowing ? '' : 'd-none' }` }>
        <div className="WorksModal-bg"></div>
        <button
          className="WorksModal-button WorksModal-button-exit"
          onClick={ this.exitButtonClickHandler.bind(this) }>
          <span className="underline">Back</span>
      </button>
      <div className="WorksModal-panel">
      </div>
      <div className="WorksModal-panel WorksModal-panel-description">
        <h1 className="WorksModal-panel-description-header">{ work.title }</h1>
        <p className="WorksModal-panel-description-paragraph">{ work.description }</p>
        <div className="WorksModal-cta">
          <a
            className="WorksModal-cta-link"
            href={ work.liveURL }
            target="_blank">
            <span className="Works-card-cta-bracket">&lt;</span>
            view live
            <span className="Works-card-cta-bracket">&gt;</span>
          </a>
        </div>
        <h2 className="WorksModal-panel-description-sub-header">Technology</h2>
        <div>
          { this.renderPills(work) }
        </div>
      </div>
      </div>
    )
  }
}

export default WorksModal
