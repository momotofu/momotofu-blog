import React from 'react'
import SakuraTree from '../../components/sakuraTree'
import AnimatedText from '../../components/animatedText'
import { getParameterByName } from '../../utils'
import './index.css'

// images
import portrait0 from './images/portrait_0.png'
import portrait1 from './images/portrait_1.png'
import portrait2 from './images/portrait_2.png'
import portraitBg from './images/portrait-bg.jpg'
import remoteBg from './images/deep-space.jpg'


class AboutPage extends React.Component {
  constructor(props) {
    super(props)

    this.scenes = []
    this.anime = window.anime
    this.introPhotos = {
        0: portrait0,
        2: portrait1,
        1: portrait2
    }
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
        animatedMessageEl.parentNode.removeChild(animatedMessageEl)
        document.querySelector('.AboutPage-greeting-control-container')
          .classList
          .toggle('show')
      }, 300)
    }, delay)
  }

  introIncrementCallback(index) {
    const imageElement = document.querySelector('#AboutPage-block-intro-portrait')

    if (index in this.introPhotos) {
      imageElement.src = this.introPhotos[index]
    }
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
        <div className="row AboutPage-block" id="AboutPage-block-0" style={{ background: '#010022'}}>
          <img className="AboutPage-block-bg" id="AboutPage-block-0-bg" src={ portraitBg } style={{ opacity: 0.7 }}/>
          <img className="AboutPage-block-portrait" id="AboutPage-block-intro-portrait" src={ portrait0 } />
          <AnimatedText
            ref="intro"
            active={ false }
            automated={ false }
            messages={
              [`Oh hello again${ recipient ? ' ' + recipient : ''}, this is me...`,
                `...my wife took this picture while I was telling her about the new rasberry pi I bought.`,
                `Thats us! My better half. Her name is Michan.`,
                `My wife took this photo too while I was sculpting clay. P.S. I like making stuff.`,
                `Since I was kid I've always had a drive to take things apart and put them back together. This eventually lead me to be software engineer.`,
                `${ introMessage ? introMessage : 'I now work as a full-stack developer, so I get to design and build interesting web products.'}`
              ]
            }
            classString="AboutPage-intro-message"
            incrementCallback={ this.introIncrementCallback.bind(this) }
            callback={ this.greetingCallback.bind(this, 1200) } />
        </div>
        <div className="AboutPage-spacer"></div>
        <div className="row AboutPage-block">
          <img className="AboutPage-block-bg" src={ remoteBg }/>
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
