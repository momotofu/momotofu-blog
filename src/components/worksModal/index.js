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
  constructor(props) {
    super(props)

    this.state = {
      isAnimating: false
    }

    this.anime = window.anime
  }

  animatePiecesForward(button, image, description) {
    const duration = 1000

    return this.anime.timeline({
      loop: false,
      autoplay: false
    })
      .add({
        targets: description,
        translateX: ['100%', '0%'],
        easing: 'easeOutExpo',
        duration,
        offset: 0,
        complete: (anim) => {
          this.animateForward = this.animatePiecesForward(button, image, description)
        }
      })
      .add({
        targets: button,
        translateX: ['-150%', '0%'],
        easing: 'easeOutExpo',
        duration,
        offset: 0
      })
      .add({
        targets: image,
        translateY: ['150%', '0%'],
        easing: 'easeOutExpo',
        duration,
        offset: 0,
        complete: (anim) => {
          console.log('completed')
        }
      })
      .play
  }

  componentDidMount() {
    this.worksModal = document.querySelector('.WorksModal')
    const backButton = document.querySelector('#WorksModal-back-button')
    const projectImage = document.querySelector('#WorksModal-project-image')
    const descriptionPanel = document.querySelector('#WorksModal-description-panel')

    this.animateForward = this.animatePiecesForward(backButton, projectImage, descriptionPanel)

  }

  componentDidUpdate() {
    if (this.props.isShowing) {
      // prevent background from scrolling
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      this.animateForward()
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
    const work = this.props.work[0] ? this.props.work[0] : {
      title: '',
      description: '',
      liveURL: '',
      tags: []
    }

    return (
      <div className={ `WorksModal ${ this.props.isShowing && !this.state.isAnimating ? '' : 'd-none' }` }>
        <div className="WorksModal-bg"></div>
        <button
          className="WorksModal-button WorksModal-button-exit"
          id="WorksModal-back-button"
          onClick={ this.exitButtonClickHandler.bind(this) }>
          <span className="underline">Back</span>
      </button>
      <div className="WorksModal-panel" id="WorksModal-project-image">
        <img className="WorksModal-panel-image" src={ process.env.PUBLIC_URL + '/images/under_cc.png' } alt="product" />
      </div>
      <div
        className="WorksModal-panel WorksModal-panel-description"
        id="WorksModal-description-panel">
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
