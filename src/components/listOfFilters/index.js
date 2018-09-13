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
  }

  componentDidMount() {
  }

  renderFilters() {
    return this.props.filters.map((filter, index) => {
      return (
        <WorksCheckbox
          label={ filter }
          key={ index + this.ID } />
      )
    })
  }

  getFilterPanelAnimation() {
    return this.anime({
      targets: document.querySelector(`#Filters-panel-${this.ID}`),
      height: this.props.isShowing ? '0%' : '100%',
      duration: 300,
      autoplay: false,
      easing: 'easeInCubic'
    })
  }

  animateFilterPanel() {
    this.props.toggleIsShowing()
    if (this.panelAnimation) this.panelAnimation.reset()
    this.panelAnimation = this.getFilterPanelAnimation()
    this.panelAnimation.play()
  }

  render() {
    const text = this.props.isShowing ? 'Hide filters' : 'Show filters'
    return (
      <div className="Filters">
        <button onClick={ this.animateFilterPanel.bind(this) } >{ text }</button>
        <div className="Filters-panel" id={ `Filters-panel-${this.ID}` }>
          { this.renderFilters() }
        </div>
      </div>
    )
  }
}

export default ListOfFilters
