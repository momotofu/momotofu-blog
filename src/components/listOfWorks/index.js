import React from 'react'
import './index.css'
import { generateRandomIDHash } from '../../utils'

class ListOfWorks extends React.Component {
  /**
   * ListOfWorks
   *
   * state:
   *
   * component props are:
   */

  render() {
    console.log(this.props)
    const works = this.props.filteredWorks.map((work, index) => {
      let topTags = []
      for (let i = 0; i < 3 && i < work.tags.length - 1; i++) {
        topTags.push(
          <span key={ i + 'span' + generateRandomIDHash() }>work.tags[i]</span>
        )
      }
      return (
        <div key={ index + 'div' + generateRandomIDHash() }>
          <h1>{ work.title }</h1>
          <h3>{ work.description }</h3>
          <div>
            { topTags }
          </div>
        </div>
      )
    })

    return (
      <div>
        { works }
      </div>
    )
  }
}

export default ListOfWorks
