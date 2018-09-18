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
          <span
            className="Works-card-pill"
            key={ i + 'span' + generateRandomIDHash() }>
            { work.tags[i] }
          </span>
        )
      }
      return (
        <div className="col-lg-6" key={ index + 'div' + generateRandomIDHash() }>
          <div className="Works-card">
            <h1 className="Works-card-title">{ work.title }</h1>
            <div>
              { topTags }
              <span className="Works-card-pill">...</span>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className={ this.props.className }>
        { works }
      </div>
    )
  }
}

export default ListOfWorks
