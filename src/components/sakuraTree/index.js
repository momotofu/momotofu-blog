import React from 'react'
import './index.css'

class SakuraTree extends React.Component {
  componentDidMount() {
    if (window.draw)
      window.draw()
  }

  render() {
    return (
      <section className="row mb-5">
        <figure className="col-12 SakuraTree-canvas" id="hero-canvas">
        </figure>
      </section>
    )
  }
}

export default SakuraTree
