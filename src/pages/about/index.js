import React from 'react'
import SakuraTree from '../../components/sakuraTree'
import './index.css'

class AboutPage extends React.Component {
  componentDidMount() {
    const Linear = window.Linear
    const ScrollMagic = window.ScrollMagic
    const Test = document.getElementById('#Test')

    this.parallaxController = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        duration: '200%'
      }
    })

    this.pinController = new ScrollMagic.Controller()

    new ScrollMagic.Scene({ triggerElement: Test })
      .setTween('#SakuraTree-container', {y: '200%', ease: Linear.easeNone})
      .addTo(this.parallaxController)

    new ScrollMagic.Scene({ triggerElement: '#trigger1', duration: 600 })
      .setPin(document.getElementById('#pin1'))
      .addIndicators({name: '1 (duration: 300)'})
      .addTo(this.pinController)

    new ScrollMagic.Scene({ triggerElement: '#trigger2', duration: 600 })
      .setPin(document.getElementById('#pin2'))
      .addIndicators({name: '1 (duration: 300)'})
      .addTo(this.pinController)

  }

  render() {
    return (
      <div className="AboutPage">
        <div id="#SakuraTree">
          <SakuraTree />
        </div>
        <div id="trigger1"></div>
        <div id="#pin1" style={{ width: '100%', height: '200px', background: 'blue' }}>
        </div>
        <div id="trigger2"></div>
        <div id="#pin2" style={{ width: '100%', height: '200px', background: 'blue' }}>
        </div>
        <section id="TestTween" style={{ width: '100%', background: 'pink', height: '700px'}}>
        </section>
      </div>
    )
  }
}

export default AboutPage
