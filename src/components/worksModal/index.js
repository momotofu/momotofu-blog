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

    this.anime = window.anime
    this.animationDuration = 1000
    this.isMobile = window.innerWidth <= 1000
  }

  animatePiecesForward(button, image, description) {
    const duration = this.animationDuration

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
          this.worksModal.style.overflow = 'auto'
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
      })
      .play
  }

  animatePiecesBackward(button, image, description, modal) {
    const duration = 500

    return this.anime.timeline({
      loop: false,
      autoplay: false
    })
      .add({
        targets: description,
        translateX: ['0%', '100%'],
        easing: 'easeOutExpo',
        duration,
        offset: 0,
        complete: (anim) => {
          this.animateBackward = this.animatePiecesBackward(button, image, description, modal)
          this.props.toggleModal()
          this.worksModal.style.overflow = null
        }
      })
      .add({
        targets: button,
        translateX: ['0%', '-150%'],
        easing: 'easeOutExpo',
        duration,
        offset: 0
      })
      .add({
        targets: image,
        translateY: ['0%', '150%'],
        easing: 'easeOutExpo',
        duration,
        offset: 0
      })
      .add({
        targets: modal,
        opacity: ['1', '0'],
        easing: 'easeOutExpo',
        duration,
        offset: 0
      })
      .play
  }

  showScrollPrompt() {
    document.querySelector('#WorksModal-keep-scrolling-prompt')
      .classList
      .remove('hide')
  }


  addScrollPromptListener() {
    const eventListener = (event) => {
      document.querySelector('#WorksModal-keep-scrolling-prompt')
        .classList
        .toggle('hide')

      document.querySelector('.WorksModal')
        .removeEventListener('scroll', eventListener)
    }

    if (this.isMobile) {
      document.querySelector('.WorksModal')
        .addEventListener('scroll', eventListener)
    }
  }

  componentDidMount() {
    this.worksModal = document.querySelector('.WorksModal')
    const backButton = document.querySelector('#WorksModal-back-button')
    const projectImage = document.querySelector('#WorksModal-project-image')
    const descriptionPanel = document.querySelector('#WorksModal-description-panel')

    this.animateForward = this.animatePiecesForward(backButton, projectImage, descriptionPanel)
    this.animateBackward = this.animatePiecesBackward(backButton, projectImage, descriptionPanel, this.worksModal)

  }

  componentDidUpdate() {
    if (this.props.isShowing) {
      // prevent background from scrolling
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      this.animateForward()
      this.addScrollPromptListener()
    } else {
      // allow background to scroll again
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'relative'
      this.showScrollPrompt()
    }

  }

  exitButtonClickHandler(event) {
    const targetClasses = event.target.classList

    if (targetClasses.contains("WorksModal-button") ||
        targetClasses.contains("WorksModal-bg") ||
        targetClasses.contains("underline"))
      this.animateBackward()
  }

  renderLinks(work) {
    const links = []

    if (work.liveURL) {
      links.push(
        <a
          key={ '123' + work.liveURL }
          className="WorksModal-cta-link"
          href={ work.liveURL }
          target="_blank">
          <span className="Works-card-cta-bracket">&lt;</span>
          view live
          <span className="Works-card-cta-bracket">&gt;</span>
        </a>)
    }

    if (work.repoURL) {
      links.push(
        <a
          key={ '123' + work.repoURL }
          className="WorksModal-cta-link"
          href={ work.repoURL }
          target="_blank">
          <span className="Works-card-cta-bracket">&lt;</span>
          view code
          <span className="Works-card-cta-bracket">&gt;</span>
        </a>)
    }

    return links
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
    const work = this.props.work[0] ? this.props.work[0] : {
      title: '',
      description: '',
      liveURL: '',
      tags: []
    }

    return (
      <div
        className={ `WorksModal ${ this.props.isShowing ? '' : 'd-none' }` }
        style={{ opacity: this.props.isShowing ? 1 : null }}
        onClick={ this.exitButtonClickHandler.bind(this) }>
        <div className="WorksModal-bg"></div>
        <button
          className="WorksModal-button WorksModal-button-exit"
          id="WorksModal-back-button"
          onClick={ this.exitButtonClickHandler.bind(this) }>
          <span className="underline">Back</span>
        </button>
        <div className="WorksModal-panel" id="WorksModal-project-image">
          <img
            className="WorksModal-panel-image"
            src={ process.env.PUBLIC_URL + '/images/under_cc.png' }
            alt="product" />
        </div>
        <div
          className="WorksModal-panel WorksModal-panel-description"
          id="WorksModal-description-panel">
          <div
            className="WorksModal-panel-description-continue-arrow continue-arrow"id="WorksModal-keep-scrolling-prompt">Keep scrolling</div>
          <div className="WorksModal-panel-description-content">
            <h1 className="WorksModal-panel-description-header">{ work.title }</h1>
            <p className="WorksModal-panel-description-paragraph">{ work.description }</p>
            <div className="WorksModal-cta">
              { this.renderLinks(work) }
            </div>
            <h2 className="WorksModal-panel-description-sub-header">Technology</h2>
            <div>
              { this.renderPills(work) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorksModal
