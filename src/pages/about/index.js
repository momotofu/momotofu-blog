import React from 'react'
import SakuraTree from '../../components/sakuraTree'
import AnimatedText from '../../components/animatedText'
import { getParameterByName } from '../../utils'
import './index.css'

class AboutPage extends React.Component {
  componentWillUnmount() {
    console.log('ran')
    this.parallaxController = null
    this.pinController = null
    this.animateSquare = null
    this.sceneOne.on('start', () => {})
  }

  componentDidMount() {
    console.log('mounted')
    const Linear = window.Linear
    const ScrollMagic = window.ScrollMagic
    const anime = window.anime

    // Todo: seperate out into a component
    var animateSquare = function(context) {
      var path = anime.path('#path')

      // Can't disable scrollmagic event. This prevents react from
      // catching the error and crashing the app.
      try { path() } catch(e) { return }

      const motionPath = anime({
        targets: '#motionPath .motionSquare',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'easeOutSine',
        duration: 2000,
      })
    }


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

    new ScrollMagic.Scene()
      .setTween(document.getElementById('#backdrop'), {x: '-300%', ease: Linear.easeNone})
      .addTo(this.parallaxController)

    console.log('then')
    this.sceneOne = new ScrollMagic.Scene({ triggerElement: '#trigger1', duration: 600 })
      .setPin(document.getElementById('#pin1'))
      .addIndicators({name: '1 (duration: 300)'})
      .on('start', animateSquare.bind(this))
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
        <div id="#backdrop" className="backdrop" style={{ backgroundImage: "url('images/dots.jpeg')" }}></div>
        <AnimatedText message={ `Hello, ${getParameterByName('recipient')}|I'm Christopher....` }/>
        <div id="#SakuraTree">
          <SakuraTree />
        </div>
        <div style={{ width: '700px', height: '100vh' }}></div>
        <div id="trigger1"></div>
        <div id="#pin1" style={{ width: '100%', height: '200px', background: 'blue' }}>
          <div id="motionPath">
            <div className="motionSquare"style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'green',
              display: 'inline-block'}}></div>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481 241"><title>test</title><path id="path" d="M780,284a120,120,0,0,1-240,0,120,120,0,0,0-240,0" transform="translate(-299.5 -163.5)" style={{fill: '#fff', stroke: '#000', strokeMiterlimit:'10'}}/></svg>
          </div>
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
