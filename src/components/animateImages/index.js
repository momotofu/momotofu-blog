import React from 'react'
import './index.css'

class AnimateImages extends React.Component {
  /**
   * Takes a series of images and reveals them
   * similar to a movie real.
   *
   * state:
   * - index: index of image that is displayed
   *
   * component props are:
   * - intervalDelay: delay in milliseconds between each progression of index
   * - images: array of images to iterate through
   * - classes: classes string that is added to the image element
   */

  constructor(props) {
    super(props)

    this.state = {
      index: 0
    }
  }

  play() {
    const index = this.state.index
    const imageLength = this.props.images.length

    if (index >= imageLength - 1)
      this.setState({ index: 0 }) // restart sequence
    else
      this.setState({ index: index + 1}) // progress forward in sequence
  }

  componentDidMount() {
    if (this.props.autoStart) {
      this.timerID = setInterval(() => {
        this.play()
      }, this.props.intervalDelay)
    }

  }

  pause() {
    clearInterval(this.timerID)
  }

  componentWillUnmount() {
    this.pause()
  }

  render() {
    return (
      <img
        className={ `${this.props.classes}` }
        src={ this.props.images[this.state.index] } />
    )
  }
}

export default AnimateImages
