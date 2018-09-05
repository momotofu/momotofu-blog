import React from 'react'
import SakuraTree from '../../components/sakuraTree'
import AnimatedText from '../../components/animatedText'
import AnimateImages from '../../components/animateImages'
import { getParameterByName } from '../../utils'
import './index.css'

// images
import portrait0 from './images/portrait_0.png'
import portrait1 from './images/portrait_2.png'
import portrait2 from './images/portrait_1.png'
import portrait3 from './images/portrait_3.png'
import portraitBg from './images/portrait-bg.jpg'
import arrow from './images/arrow.png'
import remote0 from './images/remote_0.png'
import remote1 from './images/remote_1.png'
import remoteBg from './images/deep-space.jpg'
import lightSwitchOn from './images/lightswitch_on.png'
import lightSwitchOff from './images/lightswitch_off.png'


class AboutPage extends React.Component {
  constructor(props) {
    super(props)

    this.scenes = []
    this.anime = window.anime
  }

  componentWillUnmount() {
    this.parallaxController = null
    this.pinController = null
    this.animateSquare = null

    // this is needed otherwise scenese will through an exception
    for (let index in this.scenes) {
      this.scenes[index].on('start', () => {})
    }
  }

  componentDidMount() {
    const Linear = window.Linear
    const ScrollMagic = window.ScrollMagic
    this.introBlockImage = document.querySelector('#AboutPage-block-intro-portrait')

    // Scrollmagic start
    this.parallaxController0 = new ScrollMagic.Controller({
      globalSceneOptions: {
        duration: '200%'
      }
    })

    this.parallaxController1 = new ScrollMagic.Controller()

    this.scenes.push(new ScrollMagic.Scene()
      .setTween(document.querySelector('#AboutPage-block-0-bg'), {y: '30%', ease: Linear.easeNone})
      .triggerElement(document.querySelector('#AboutPage-block-0'))
      .on('start', this.activateText.bind(this, 'intro'))
      .addTo(this.parallaxController0))

    this.scenes.push(new ScrollMagic.Scene({
      duration: '200%'
    })
      .setTween(document.querySelector('#AboutPage-block-1-bg'), {x: '-15%', ease: Linear.easeNone})
      .triggerElement(document.querySelector('#AboutPage-block-1'))
      .on('start', this.activateText.bind(this, 'remote'))
      .addTo(this.parallaxController1))

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

  //animatePhoto(targets) {
    //return this.anime({
      //targets: targets,
      //translateX: {
        //value: -50,
        //duration: 400
      //},
      //rotate: {
        //value: -5,
        //duration: 300,
        //easing: 'easeInSine'
      //},
      //scale: {
        //value: 1.1,
        //duration: 300,
        //easing: 'easeInQuart'
      //},
      //elasticity: 200,
      //direction: 'alternate',
      //delay: 250 // All properties except 'scale' inherit 250ms delay
    //});
  //}

  greetingCallback(delay) {
    const animatedMessageEl = document.querySelector('.AboutPage-greeting-message')
    setTimeout(() => {
      if (!animatedMessageEl) return
      animatedMessageEl.classList.toggle('fade')

      setTimeout(() => {
        if (!animatedMessageEl) return
        animatedMessageEl.style.zIndex = -1

        document.querySelector('.AboutPage-greeting-control-container')
          .classList
          .toggle('show')
      }, 400)
    }, delay)
  }

  introIncrementCallback(index) {
    const portraitComponent = this.refs['introPortrait']

    switch(index) {
      case 1:
        portraitComponent.increment()
        break
      case 2:
        portraitComponent.increment()
        break
      case 3:
        portraitComponent.increment()
        break
    }
  }

  continueCallback(delay, selector) {
    const animatedMessageEl = document.querySelector(`.AboutPage-${selector}-message`)

    setTimeout(() => {
      if (!animatedMessageEl) return
      animatedMessageEl.classList.toggle('fade')

      setTimeout(() => {
        if (!animatedMessageEl) return
        animatedMessageEl.style.zIndex = -1

        const introArrow = document.querySelector(`#AboutPage-${selector}-arrow`)
        const introCTA = document.querySelector(`#AboutPage-${selector}-cta`)

        introArrow.classList.add('moveUpDown')
        introArrow.classList.add('show')
        introCTA.classList.add('show')

      }, 400)
    }, delay)
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

  lightSwitchClickHandler() {
    // toggle lightswitch
    this.refs['lightSwitch'].increment()

    // toggle #AboutPage-contact element background color
    const contactElement = document.querySelector('.AboutPage-contact')
    const contactSignifier = document.querySelector('.AboutPage-contact-switch-signifier')

    const offColor = 'rgb(12, 3, 24)'
    const onColor = '#fff'
    const color = getComputedStyle(contactElement ,null).getPropertyValue('background-color');
    const isOffColor = (color == offColor)

    // update elements with new colors
    if (isOffColor) {
      contactElement.style.backgroundColor = onColor
      contactSignifier.style.color = offColor
      contactSignifier.innerText = 'Click off'
    } else {
      contactElement.style.backgroundColor = offColor
      contactSignifier.style.color = onColor
      contactSignifier.innerText = 'Click on'
    }
  }

  render() {
    const recipient = getParameterByName('recipient')
    const introMessage = getParameterByName('introMessage')

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
        <div className="AboutPage-block d-flex" id="AboutPage-block-0" style={{ background: '#010022'}}>
          <img
            className="AboutPage-block-bg"
            id="AboutPage-block-0-bg"
            src={ portraitBg }
            style={{ opacity: 0.7, background: '#010022', marginTop: '-10%' }}/>
          <AnimateImages
            ref={ 'introPortrait' }
            autoStart={ false }
            classes="AboutPage-block-portrait"
            images={ [portrait0, portrait1, portrait2, portrait3] }
            intervalDelay={ 0 }
          />
          <img className="AboutPage-intro-arrow" src={ arrow } id="AboutPage-intro-arrow" />
          <h1 className="AboutPage-intro-cta" id="AboutPage-intro-cta">Keep scrolling</h1>
          <AnimatedText
            ref="intro"
            active={ false }
            automated={ false }
            messages={
              [`Oh hello again${ recipient ? ' ' + recipient : ''}, this is me...`,
                `...my wife took this picture while I was telling her about the new rasberry pi I bought.`,
                `Thats us! My better half. Her name is Michan.`,
                `This is me sculpting clay. P.S. I like making stuff.`,
                `Since I was kid people would often find me staring of into space imagining things or thinking deeply about something.`,
                `${ introMessage ? introMessage : 'I now work as a full-stack developer, so I get to design and build interesting web products.'}`
              ]
            }
            classString="AboutPage-intro-message"
            incrementCallback={ this.introIncrementCallback.bind(this) }
            callback={ this.continueCallback.bind(this, 1200, 'intro') } />
        </div>
        <div className="AboutPage-spacer"></div>
        <div className="AboutPage-block d-flex" id="AboutPage-block-1">
          <img className="AboutPage-block-bg" id="AboutPage-block-1-bg" src={ remoteBg }/>
          <img className="AboutPage-intro-arrow" src={ arrow } id="AboutPage-remote-arrow" />
          <h1 className="AboutPage-intro-cta" id="AboutPage-remote-cta">Keep scrolling</h1>
          <AnimatedText
            ref="remote"
            active={ false }
            automated={ false }
            messages={
              [`Did I mention I fulfilled my childhood dream of speaking Japanese and living in Japan?`,
                `I sure did! All that DragonBall Z eventually lead to something great.`,
                `I work remotely from Japan for the USA.`,
                `I make up for the time difference by waking up really early.`,
                `My punctuality and flexibility are like minty bubble gum...`,
                `Mmmmmhhmm`]
            }
            classString="AboutPage-intro-message AboutPage-remote-message"
            callback={ this.continueCallback.bind(this, 1200, 'remote') } />
          <AnimateImages
            autoStart={ true }
            classes="AboutPage-remote-movie"
            images={ [remote0, remote1] }
            intervalDelay={ 300 }
          />
        </div>
        <div className="AboutPage-spacer"></div>
        <div className="AboutPage-block d-flex AboutPage-contact">
          <h3 className="AboutPage-contact-switch-signifier">Click on</h3>
          <AnimateImages
            ref={ 'lightSwitch' }
            autoStart={ false }
            onClick={ this.lightSwitchClickHandler.bind(this) }
            classes="AboutPage-contact-switch"
            images={ [lightSwitchOn, lightSwitchOff] }
            intervalDelay={ 0 }
          />
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
