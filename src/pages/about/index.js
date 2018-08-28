import React from 'react'
import SakuraTree from '../../components/sakuraTree'
import AnimatedText from '../../components/animatedText'
import { getParameterByName } from '../../utils'
import './index.css'

// images
import portrait from './images/portrait.png'
import portraitBg from './images/portrait-bg.jpg'
import remoteBg from './images/deep-space.jpg'


class AboutPage extends React.Component {
  constructor(props) {
    super(props)

    this.scenes = []
  }

  componentWillUnmount() {
    this.parallaxController = null
    this.pinController = null
    this.animateSquare = null

    for (let index in this.scenes) {
      this.scenes[index].on('start', () => {})
    }
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

    this.scenes.push(new ScrollMagic.Scene()
      .setTween(document.querySelector('#AboutPage-block-0-bg'), {y: '-30%', ease: Linear.easeNone})
      .triggerElement(document.querySelector('#AboutPage-block-0'))
      .on('start', this.activateText.bind(this, 'intro'))
      .addTo(this.parallaxController))

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

  introIncrementCallback() {

  }

  redrawClickHandler() {
    if (window.draw)
      window.draw()
  }

  activateText(name) {
    if (name in this.refs) {
      this.refs[name].toggleActivate()
    }
  }

  render() {
    const recipient = getParameterByName('recipient')

    return (
      <div className="AboutPage">
        <div className="AboutPage-greeting">
          <AnimatedText
            automated={ false }
            active={ true }
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
        <div className="row AboutPage-block" id="AboutPage-block-0">
          <img className="AboutPage-block-bg" id="AboutPage-block-0-bg" src={ portraitBg } />
          <img className="AboutPage-block-portrait" src={ portrait } />
          <AnimatedText
            ref="intro"
            active={ false }
            automated={ false }
            messages={
              [`Oh hello again, that's me below...`,
                `My wife took this picture while I was telling her about the new rasberry pi I bought.`,
                `I'm curious and creative, so I like to tinker around with things.`,
                `The drive to take things apart and put them back together again eventually lead me to be programmer.`,
                `I now work as a full-stack developer, so I get to design and build interesting web products. Yay!`
              ]
            }
            classString="AboutPage-intro-message"
            incrementCallback={ () => { console.log('increment') } }
            callback={ this.greetingCallback.bind(this, 1200) } />
        </div>
        <div className="AboutPage-spacer"></div>
        <div className="row AboutPage-block">
          <img className="AboutPage-block-bg" src={ remoteBg }/>
        </div>
        <div className="AboutPage-spacer"></div>

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
