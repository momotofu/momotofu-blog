import React from 'react'
import SakuraTree from '../../components/sakuraTree'
import AnimatedText from '../../components/animatedText'
import portrait from './images/portrait.png'
import portraitBg from './images/portrait-bg.jpg'
import { getParameterByName } from '../../utils'
import './index.css'

class AboutPage extends React.Component {
  componentWillUnmount() {
    this.parallaxController = null
    this.pinController = null
    this.animateSquare = null
    this.sceneOne.on('start', () => {})
  }

  componentDidMount() {
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
        duration: 1600,
      })
    }


    // Scrollmagic start
    this.parallaxController = new ScrollMagic.Controller({
      globalSceneOptions: {
        duration: '200%'
      }
    })


    this.pinController = new ScrollMagic.Controller()

    new ScrollMagic.Scene()
      .setTween(document.querySelector('.AboutPage-intro-portrait-bg'), {y: '-30%', ease: Linear.easeNone})
      .triggerElement(document.querySelector('.AboutPage-intro'))
      .addTo(this.parallaxController)

    //new ScrollMagic.Scene()
      //.setTween(document.getElementById('#backdrop'), {x: '-300%', ease: Linear.easeNone})
      //.addTo(this.parallaxController)
    //new ScrollMagic.Scene({ triggerElement: '#trigger0', duration: 1600 })
      //.setPin(document.getElementById('pin0'))
      //.addIndicators({name: '1 (duration: 800)'})
      //.addTo(this.pinController)

    //this.sceneOne = new ScrollMagic.Scene({ triggerElement: '#trigger1', duration: 600 })
      //.setPin(document.getElementById('#pin1'))
      ////.addIndicators({name: '1 (duration: 300)'})
      //.on('start', animateSquare.bind(this))
      //.addTo(this.pinController)

    //new ScrollMagic.Scene({ triggerElement: '#trigger2', duration: 600 })
      //.setPin(document.getElementById('#pin2'))
      ////.addIndicators({name: '1 (duration: 300)'})
      //.addTo(this.pinController)
    //// Scrollmagic end

  }

  greetingCallback(delay) {
    const animatedMessageEl = document.querySelector('.AboutPage-greeting-message')
    setTimeout(() => {
      animatedMessageEl.classList.toggle('fade')
      setTimeout(() => {
        animatedMessageEl.parentNode.removeChild(animatedMessageEl)
        document.querySelector('.AboutPage-greeting-control-container')
          .classList
          .toggle('show')
      }, 300)
    }, delay)
  }

  redrawClickHandler() {
    if (window.draw)
      window.draw()
  }

  render() {
    const recipient = getParameterByName('recipient')

    return (
      <div className="AboutPage">
        <div className="AboutPage-greeting">
          <AnimatedText
            automated={false}
            messages={
              [`Hello${ recipient ? ' ' + recipient : ''},|Welcome to my webby bio.| I'm Christopher...`,
              `Check it out!`,
              `The Sakura tree below is actually a python program I wrote.`,
              `It uses the pattern of recursion to generate and render a tree similar to the way nature does.`,
              `The program draws a new tree each time.`,
              `It'll take a sec for the tree to grow, so enjoy the little squiggles or continue scrolling on through.`]
            }
            classString="AboutPage-greeting-message mt-5"
            callback={ this.greetingCallback.bind(this, 1200) } />
          <div className="AboutPage-greeting-control-container">
            <button
              className="AboutPage-greeting-control"
              style={{left: 0}}
              onClick={ this.redrawClickHandler }>Redraw tree</button>
          </div>
          <div className="AboutPage-SakuraTree">
            <SakuraTree />
          </div>
        </div>
        <div className="row AboutPage-intro">
          <img className="AboutPage-intro-portrait-bg" src={ portraitBg } />
          <img className="AboutPage-intro-portrait" src={ portrait } />
        </div>

        {/*<div id="trigger1"></div>
        <div id="#pin1" style={{ width: '100%', height: '200px', background: 'blue' }}>
          <div id="motionPath">
            <div className="motionSquare"style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'green',
              display: 'inline-block'}}></div>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481 241"><title>test</title><path id="path" d="M780,284a120,120,0,0,1-240,0,120,120,0,0,0-240,0" transform="translate(-299.5 -163.5)" style={{fill: '#fff', stroke: '#000', strokeMiterlimit:'10'}}/></svg>
          </div>
        </div> */}
        {/*
        <div id="trigger2"></div>
        <div id="#pin2" style={{ width: '100%', height: '200px', background: 'blue' }}>
        </div>
        <section id="TestTween" style={{ width: '100%', background: 'pink', height: '700px'}}>
        </section>
        */}
      </div>
    )
  }
}

export default AboutPage
