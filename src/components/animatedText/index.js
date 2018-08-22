import React from 'react'
import './index.css'
import { generateRandomIDHash } from '../../utils'


class AnimatedText extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMessageIndex: -1
    }
  }

  animateText(callback) {
    const anime = window.anime
    const targetId = this.targetId

    return anime.timeline({
      loop: false,
      autoplay: false
    })
      .add({
        targets: `#${targetId} .AnimatedText-letter`,
        opacity: 1,
        duration: 160,
        delay: function(el, i) {
          return 100 * i;
        },
        complete: (anim) => {
          if (callback) {
            callback()
          }
        }
      })
  }

  componentDidUpdate() {
    const animate = this.animateText(() => {
      if (this.state.currentMessageIndex < this.props.messages.length - 1) {
        this.setState({
          currentMessageIndex: this.state.currentMessageIndex + 1
        })
      } else {
        return
      }
    })
    animate.play()
  }

  componentDidMount() {
    this.setState({
      currentMessageIndex: this.state.currentMessageIndex + 1
    })
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
        HTMLString += `<span class="AnimatedText-letter">${letter}</span>`
      }
    }

    return HTMLString
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
      </div>
    )
  }
}

export default AnimatedText
