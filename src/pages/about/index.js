import React from 'react'
import SakuraTree from '../../components/sakuraTree'
import './index.css'

class AboutPage extends React.Component {
  componentDidMount() {
    const Linear = window.Linear
    const ScrollMagic = window.ScrollMagic
    const anime = window.anime
    const $ = window.$

    // Wrap every letter in a span
    anime.timeline({loop: false})
      .add({
        targets: '#greeting .letter',
        opacity: 1,
        translateY: [-40,0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function(el, i) {
          return 100 * i;
        }
      })
      .add({
        targets: '#greeting-name .letter',
        opacity: 1,
        translateY: [-40,0],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function(el, i) {
          return 50 * i;
        }
      })

    // Scrollmagic start
    this.parallaxController = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        duration: '200%'
      }
    })

    this.pinController = new ScrollMagic.Controller()

    new ScrollMagic.Scene()
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
    // Scrollmagic end

  }

  render() {
    return (
      <div className="AboutPage">
        <div className="greeting-hero">
          <h1 className="heading" id="greeting">
            <span className="letter">H</span>
            <span className="letter">e</span>
            <span className="letter">l</span>
            <span className="letter">l</span>
            <span className="letter">o</span>
            <span className="letter">,</span>
          </h1>
          <h1 className="heading" id="greeting-name">
            <span className="letter">I</span>
            <span className="letter">'</span>
            <span className="letter">m</span>
            {' '}
            <span className="letter">C</span>
            <span className="letter">h</span>
            <span className="letter">r</span>
            <span className="letter">i</span>
            <span className="letter">s</span>
            <span className="letter">t</span>
            <span className="letter">o</span>
            <span className="letter">p</span>
            <span className="letter">h</span>
            <span className="letter">e</span>
            <span className="letter">r</span>
          </h1>
        </div>
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
