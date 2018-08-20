import React from 'react'
import './index.css'


class AnimatedText extends React.Component {
  componentDidMount() {
    const anime = window.anime

    // Wrap every letter in a span
    anime.timeline({loop: false})
      .add({
        targets: '#message .AnimatedText-letter',
        opacity: 1,
        duration: 160,
        delay: function(el, i) {
          return 100 * i;
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
      } else if (i != messageLength - 2) {
        HTMLString += `<span class="AnimatedText-letter">${letter}</span>`
      }
    }

    return HTMLString
  }

  render() {

    return (
      <div className="AnimatedText-container">
        <p
          id="message"
          dangerouslySetInnerHTML={{__html: this.renderMessageHTML() }}>
        </p>
      </div>
    )
  }
}

export default AnimatedText
