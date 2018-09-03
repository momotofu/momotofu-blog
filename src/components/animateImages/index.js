import React from 'react'
import './index.css'

class AnimateImages extends React.Component {
  /**
   * Takes a series of images and reveals them
   * similar to a movie real.
   *
   * component props are:
   * - index: index of image that is displayed
   * - intervalDelay: delay between each progression of index
   * - images: array of images to iterate through
   */

  constructor(props) {
    super(props)

    this.state = {
      index: 0
    }
  }

  play() {
    const index = this.state.index
    const imageLength = this.state.images.length

    if (index >= imageLength - 1)
      this.setState({ index: 0 }) // restart sequence
    else
      this.setState({ index: index + 1}) // progress forward in sequence
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.play()
    }, this.props.intervalDeley)
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
