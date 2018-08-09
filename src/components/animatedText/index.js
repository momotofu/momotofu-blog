import React from 'react'
import './index.css'


class AnimatedText extends React.Component {
  componentDidMount() {
    const anime = window.anime

    // Wrap every letter in a span
    anime.timeline({loop: false})
      .add({
        targets: '#greeting .letter',
        opacity: 1,
        translateY: [-40,0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function(el, i) {
          return 100 * i;
        }
      })
      .add({
        targets: '#greeting-name .letter',
        opacity: 1,
        translateY: [-40,0],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function(el, i) {
          return 50 * i;
        }
      })
  }

  render() {
    return (
      <div className="greeting-hero">
        <h1 className="heading" id="greeting">
          <span className="letter">H</span>
          <span className="letter">e</span>
          <span className="letter">l</span>
          <span className="letter">l</span>
          <span className="letter">o</span>
          <span className="letter">,</span>
        </h1>
        <h1 className="heading" id="greeting-name">
          <span className="letter">I</span>
          <span className="letter">'</span>
          <span className="letter">m</span>
          {' '}
          <span className="letter">C</span>
          <span className="letter">h</span>
          <span className="letter">r</span>
          <span className="letter">i</span>
          <span className="letter">s</span>
          <span className="letter">t</span>
          <span className="letter">o</span>
          <span className="letter">p</span>
          <span className="letter">h</span>
          <span className="letter">e</span>
          <span className="letter">r</span>
        </h1>
      </div>
    )
  }
}

export default AnimatedText
