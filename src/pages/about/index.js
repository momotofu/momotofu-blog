import React from 'react'
import SakuraTree from '../../components/sakuraTree'
import AnimatedText from '../../components/animatedText'
import AnimateImages from '../../components/animateImages'
import { Link } from 'react-router-dom'
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
  }

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
        document.querySelector('#greeting-continue-arrow')
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
      default:
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
    const isOffColor = (color === offColor)

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
    const contactMessage = getParameterByName('contactMessage')

    return (
      <div className="AboutPage">
        <div className="AboutPage-greeting">
          <AnimatedText
            automated={ false }
            active={ true }
            messages={
              [`Hello${ recipient ? ' ' + recipient : ''},|Welcome to my webby bio.| I'm Christopher...`,
              `Check it out!`,
              `The Sakura tree below is actually a python program I wrote. And it's running right now.`,
              `It uses the pattern of recursion to generate and render a tree similar to the way nature does.`,
              `The program draws a new tree each time.`,
              `It'll take a sec for the tree to grow, so enjoy the little squiggles or continue scrolling down.`]
            }
            classString="AboutPage-greeting-message"
            callback={ this.greetingCallback.bind(this, 1200) } />
          <div className="AboutPage-greeting-control-container">
            <button
              className="AboutPage-greeting-control"
              style={{left: 0}}
              onClick={ this.redrawClickHandler }>Draw a new tree</button>
          </div>
          <div className="AboutPage-SakuraTree">
            <SakuraTree />
          </div>
          <div className="continue-arrow" id="greeting-continue-arrow">
            Keep Scrolling
          </div>
        </div>
        <div className="AboutPage-block d-flex" id="AboutPage-block-0" style={{ background: '#010022'}}>
          <img
            alt=""
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
          <img alt="" className="AboutPage-intro-arrow" src={ arrow } id="AboutPage-intro-arrow" />
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
          <img alt="" className="AboutPage-block-bg" id="AboutPage-block-1-bg" src={ remoteBg }/>
          <img alt="" className="AboutPage-intro-arrow" src={ arrow } id="AboutPage-remote-arrow" />
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
          <h1 className="AboutPage-contact-message">
            {contactMessage ? contactMessage : 'It\'s a hidden message!!! Wanna make something sweet? Need a digital tune up? Or just wannna say hi?'}{' '}
            <Link to="/contact" className="AboutPage-contact-link">Go to the contact page</Link>
          </h1>
          <h3 className="AboutPage-contact-switch-signifier">Click on</h3>
          <AnimateImages
            ref={ 'lightSwitch' }
            autoStart={ false }
            onClick={ this.lightSwitchClickHandler.bind(this) }
            classes="AboutPage-contact-switch"
            images={ [lightSwitchOn, lightSwitchOff] }
            intervalDelay={ 0 }
          />
          <h5 className="AboutPage-contact-fine-print">
            THE FINE PRINT: By clicking on the button above "you" which shall hereby be refered to as "I" do agree to the following statements: I solemnly agree to be kind to others. I solemnly agree to smile when smiled to. I solemnly agree to eatch ketchup with french fries or fry sauce, or any other tasteful sauce. I solemnly agree that this contract is just a comedic but serious attempt at humour. I agree. And I also solemnly agree that this contract is invalid, unbinding, and a thigh-slapper. That being said I agree that chocolate is probably one of the best flavors on Earth, or maybe cheddar cheeze. And I like the color white. I agree that "Click on" and "Click off" is similar to the maxim from Karate Kid "Wax on" and "Wax off." alliteration... Trafulaful. Trafulaful. Do da' diddy didaly don' dune dom. But in all seriousness, there is one truth. Ask me about it sometime.
          </h5>
        </div>
        <div className="AboutPage-spacer"></div>
      </div>
    )
  }
}

export default AboutPage
