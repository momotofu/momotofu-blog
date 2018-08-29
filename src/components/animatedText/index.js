import React from 'react'
import './index.css'
import { generateRandomIDHash } from '../../utils'


class AnimatedText extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMessageIndex: -1,
      automated: this.props.automated,
      active: this.props.active
    }

    this.anime = window.anime
  }

  animateText(callback, callbackDelay, fadeCallback) {
    const targetId = this.targetId
    const speed = this.props.speed ? this.props.speed : 70

    return this.anime.timeline({
      loop: false,
      autoplay: false
    })
      .add({
        targets: `#${targetId} .AnimatedText-letter`,
        opacity: 1,
        duration: 160,
        delay: function(el, i) {
          return speed * i;
        },
        complete: (anim) => {
          if (fadeCallback) {
            setTimeout(() => {
              fadeCallback(true)
            }, callbackDelay ? callbackDelay - 300 : 300)
          }
          if (callbackDelay && callback) {
            setTimeout(() => {
              callback()
            }, callbackDelay)
          } else if (!callbackDelay && callback) {
            callback()
          }

        }
      })
  }

  animateContinueSignifier() {
    const target = document.querySelector(`#${this.targetId}-signifier`)

    return this.anime({
      targets: target,
      translateX: 50,
      opacity: 1,
      elasticity: function(el, i, l) {
        return (200 + i * 200);
      }
    })
  }

  addOrRemoveFade(addFade) {
    if (addFade)
      document.querySelector('#' + this.targetId).classList.add('fade')
    else
      document.querySelector('#' + this.targetId).classList.remove('fade')
  }

  canIncrement() {
    return !(this.state.currentMessageIndex >= this.props.messages.length - 1)
  }

  incrementMessageIndex() {
    if (!this.canIncrement())
      return

    if (this.props.incrementCallback)
      this.props.incrementCallback(this.state.currentMessageIndex)

    this.setState({
      currentMessageIndex: this.state.currentMessageIndex + 1
    })
  }

  handleContinueSignifierClick() {
    if (!this.continueSignifier)
      this.continueSignifier = document.querySelector(`#${this.targetId}-signifier`)

    this.continueSignifier.style = {}

    this.incrementMessageIndex()
    if (this.continueSignifierAnimation)
      this.continueSignifierAnimation.pause()
  }

  componentDidUpdate() {
    if (this.state.active && this.state.currentMessageIndex == -1) {
      this.incrementMessageIndex()
    }

    this.addOrRemoveFade(false)

    const animateMessage = function() {
      if (this.state.automated) {
        return this.animateText(() => {
          if (this.canIncrement()) {
            if ('disableAutomatedAtIndex' in this.props && this.state.currentMessageIndex + 1 === this.props.disableAutomatedAtIndex)
              this.setState({automated: false})

            this.incrementMessageIndex()

          } else if ('callback' in this.props) {
            this.props.callback()

          } else {
            return
          }

          }, 2000, this.addOrRemoveFade.bind(this))

      } else {
        return this.animateText(() => {
          if (this.canIncrement()) {
            // animate continue button
            this.continueSignifierAnimation = this.animateContinueSignifier()

          } else if ('callback' in this.props) {
            this.props.callback()
          } else {
            return
          }
        })
      }
    }.call(this)

    animateMessage.play()
  }

  componentDidMount() {
    this.continueSignifier = document.querySelector(`#${this.targetId}-signifier`)
    this.addOrRemoveFade(false)

    if (this.state.active) {
      this.setState({
        currentMessageIndex: this.state.currentMessageIndex + 1
      })
    }

  }

  renderMessageHTML() {
    if (this.state.currentMessageIndex < 0) return

    const currentMessage = this.props.messages[this.state.currentMessageIndex]
    const messageLength = currentMessage.length
    const message = currentMessage
    let HTMLString = ''

    // loop through each letter in the props message
    // and construct an html string that will be used
    // for anime animation
    for (let i = 0; i < messageLength; i++) {
      const letter = message[i]

      if (letter === ' ') {
        HTMLString += ' '
      } else if (letter === '|') {
        HTMLString += '<br />'
      } else {
        HTMLString += `<span class="AnimatedText-letter" >${letter}</span>`
      }
    }

    return HTMLString
  }

  renderContinueSignifier() {
    if (!this.state.automated && this.canIncrement())
      return (
        <button
          onClick={ this.handleContinueSignifierClick.bind(this) }
          style={{}}
          className='AnimatedText-message-signifier'
          id={`${this.targetId}-signifier`}>
          Continue
        </button>
      )
    else
      return ''
  }

  toggleActivate() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    if (!this.targetId)
      this.targetId = 'AnimatedText-' + generateRandomIDHash()

    const classes = this.props.classString
    const id = this.props.id

    return (
      <div
        className={ `AnimatedText-container ${ classes ? classes : '' }` }
        id={ id ? id : '' }>
        <p
          className="AnimatedText-message"
          id={ `${this.targetId}` }
          dangerouslySetInnerHTML={{__html: this.renderMessageHTML() }}>
        </p>
        { this.renderContinueSignifier() }
      </div>
    )
  }
}

export default AnimatedText
