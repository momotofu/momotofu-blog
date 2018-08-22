import React from 'react'
import './index.css'
import { generateRandomIDHash } from '../../utils'


class AnimatedText extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMessage: props.messages[0]
    }
  }

  componentDidMount() {
    const anime = window.anime
    const targetId = this.targetId

    const animateLetters = anime.timeline({
      loop: false,
    })
      .add({
        targets: `#${targetId} .AnimatedText-letter`,
        opacity: 1,
        duration: 160,
        delay: function(el, i) {
          return 100 * i;
        },
        complete: (anim) => {
          if ('callback' in this.props)
            this.props.callback()
        }
      })

  }

  renderMessageHTML() {
    const messageLength = this.props.message.length
    const message = this.props.message
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
