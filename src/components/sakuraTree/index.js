import React from 'react'
import './index.css'

class SakuraTree extends React.Component {
  componentDidMount() {
    if (window.draw)
      window.draw()
  }

  render() {
    return (
      <section id="SakuraTree-container">
        <figure
          className="SakuraTree-canvas"
          id="hero-canvas">
        </figure>
      </section>
    )
  }
}

export default SakuraTree
