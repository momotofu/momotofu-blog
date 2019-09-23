import React from 'react'
import './index.css'

class ListOfWorks extends React.Component {
  /**
   * ListOfWorks
   *
   * state:
   *
   * component props are:
   */

  cardClickHandler(work, event) {
    this.props.toggleWorksModal(work.title)
  }

  render() {
    const works = this.props.filteredWorks.map((work, index) => {
      let topTags = []
      for (let i = 0; i < 3 && i < work.tags.length - 1; i++) {
        topTags.push(
          <span
            className="Works-card-pill"
            key={ i + 'span' }>
            { work.tags[i] }
          </span>
        )
      }
      return (
        <div className="col-lg-6" key={ index + 'div' }>
          <div className="Works-card" onClick={ this.cardClickHandler.bind(this, work) }>
            <h1 className="Works-card-title">{ work.title }</h1>
            <span className="Works-card-cta">
              <span className="Works-card-cta-bracket">&lt;</span>
              view details
              <span className="Works-card-cta-bracket">&gt;</span>
            </span>
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
