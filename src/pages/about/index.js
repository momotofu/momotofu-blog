import React from 'react'
import SakuraTree from '../../components/sakuraTree'
import './index.css'

class AboutPage extends React.Component {
  componentDidMount() {
    const Linear = window.Linear
    const ScrollMagic = window.ScrollMagic
    const SakuraTree = document.getElementById('#SakuraTree')
    const Test = document.getElementById('#Test')

    this.controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        duration: '200%'
      }
    })


    new ScrollMagic.Scene({ triggerElement: SakuraTree })
      .setTween('#SakuraTree > section', {y: '80%', ease: Linear.easeNone})
      .addTo(this.controller)

    new ScrollMagic.Scene({ triggerElement: Test })
      .setTween('#Test > section', {y: '80%', ease: Linear.easeNone})
      .addTo(this.controller)

  }

  render() {
    return (
      <div className="AboutPage">
        <div id="#SakuraTree">
          <SakuraTree />
        </div>
        <div style={{ width: '100%', background: 'blue', height: '200px'}}>
        </div>
        <div id="#Test">
          <section style={{ width: '100%', background: 'pink', height: '700px'}}>
          </section>
        </div>
      </div>
    )
  }
}

export default AboutPage
