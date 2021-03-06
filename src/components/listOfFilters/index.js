import React from 'react'
import './index.css'
import { generateRandomIDHash } from '../../utils'
import WorksCheckbox from '../../redux/containers/worksCheckbox'

class ListOfFilters extends React.Component {
  /**
   * Renders a list of checkboxes. Checkboxes when check send
   * actions to a list of filters.
   *
   * component props are:
   */

  constructor(props) {
    super(props)

    this.anime = window.anime
    this.ID = generateRandomIDHash()
    this.panelHeight = window.innerWidth < 600 ? '92px' : '48px'
  }

  componentDidMount() {
    this.filterPanel = document.querySelector(`#Filters-panel-${this.ID}`)
    if (this.props.isShowing) this.filterPanel.style.height = this.panelHeight
    else this.filterPanel.style.height = '0%'
  }

  renderFilters() {
    return this.props.filters.map((filter, index) => {
      return (
        <WorksCheckbox
          className={ `Filters-panel-filter ${ this.props.isShowing ? '' : 'd-none' }` }
          label={ filter }
          key={ index + this.ID } />
      )
    })
  }

  getFilterPanelAnimation() {
    return this.anime({
      targets: document.querySelector(`#Filters-panel-${this.ID}`),
      height: this.props.isShowing ? [this.panelHeight, 0] : [0, this.panelHeight],
      duration: 160,
      autoplay: false,
      easing: 'linear'
    })
  }

  animateFilterPanel() {
    this.props.toggleIsShowing()
    if (this.panelAnimation) this.panelAnimation.reset()
    this.panelAnimation = this.getFilterPanelAnimation()
    this.panelAnimation.play()
  }

  renderClearFiltersButton() {
    if (this.props.hasFilter) {
      return (
        <button
          onClick={ this.props.clearFilters }
          className="Filters-button">
          <span className="underline">Clear filters</span>
        </button>
      )
    }
  }

  render() {
    const text = this.props.isShowing ? 'Hide filters' : 'Show filters'
    return (
      <div className="Filters">
        <button
          onClick={ this.animateFilterPanel.bind(this) }
          className="Filters-button Filters-button-show">
          <span className="underline">{ text }</span>
        </button>
        { this.renderClearFiltersButton() }
        <div
          className="Filters-panel"
          id={ `Filters-panel-${this.ID}` }>
          { this.renderFilters() }
        </div>
      </div>
    )
  }
}

export default ListOfFilters
