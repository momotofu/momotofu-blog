import React from 'react'
import ReactDOM from 'react-dom'
import Section from '../../components/blog-post/section'

require('./index.styl')

class MomotofuPage extends React.Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollTop = 0
  }

  scrollToTarget(targetID) {
    var appRect = window.document.getElementById('app').getBoundingClientRect(),
    targetRect = ReactDOM.findDOMNode(this.refs[targetID]).getBoundingClientRect(),
    offset = targetRect.top - appRect.top

    function startScroll(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            increment = 20;

        var animateScroll = function(elapsedTime) {
            elapsedTime += increment;
            var position = easeInOut(elapsedTime, start, change, duration);
            element.scrollTop = Math.round(position);
            if (elapsedTime < duration) {
                setTimeout(function() {
                    animateScroll(elapsedTime);
                }, increment);
            }
        };

        animateScroll(0);
    }

    function easeInOut(currentTime, start, change, duration) {
        currentTime /= duration / 2;
        if (currentTime < 1) {
            return change / 2 * currentTime * currentTime + start;
        }
        currentTime -= 1;
        return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    }

    startScroll(window.document.getElementById('app'), offset - 120, 1000)
  },

  render() {
    return (
      <div className='Momotofu-container'>
        <div className='Momotofu-hero'>
          <video className='Momotofu-hero-video' src='videos/coffee-cup.mp4#t=1,160' autoPlay loop/>
          <a onClick={ this.scrollToTarget.bind(null, 'KonichiwaTarget') } className='Momotofu-hero-greeting'>こんにちは</a>
        </div>
        <div ref='KonichiwaTarget' />
        <Section
          headingCopy={'こんにちは'}
          bodyCopy={[
            'Christopher came from a once small town in southern Utah called St. George. He is the second oldest in a family of six; consisting of two brothers, one sister, and two parents. Ever since he was a child he had a fascination with Japan (probably from watching Saturday morning Dragon Ball Z and from eating a lot of tasteful sushi). From elementary school to high school, Christopher showed a talent for art and had an eye of curiosity for just about everything.',
            'Once he finished high school, Christopher set out to college at Dixie State University. There he found himself experiencing a slow academic pace similar to high school, and as a result he began to feel incredibly bored. The time at DSU started to attenuate Christopher’s faith in colleges. However, after obtaining an Associates of Science, he decided to escape the Southern Utah Bubble (S.U.B. - erbs), and give the University of Utah a go.',
            'The electric pulse of Salt Lake City awakened his senses. At the U Christopher found a cornucopia of experience, knowledge, culture, and friends. The variety and quality of class domains was overwhelming to the curious mind, and like an ADHD sponge, Christopher soaked himself in classes from Japanese, Animation, Computer Science, and Graphic Design. Unfortunately for him though, there wasn’t a degree made up of all those subjects.',
            'One day while walking through the University Library, he mustered the courage to asked if he could sit at the table of a beautiful girl. After a couple of sentence exchanges and a few minutes of subliminal body language, they realized they were two kindred spirits and soon began dating. After a couple of months her time as a foreign exchange student ended, so she went back to Japan. Christopher who had been working as a waiter and freelance designer, started to work extra hard in order to afford the upcoming and frequent trips to Japan.',
            'Eventually, Christopher found himself working on an engineering team over at Movement Ventures. There he produced some stellar results; which in the space of a year brought his salary from $12 an hour to a 40k salary, to a 50k salary, and then finally to a 60k salary. That gorgeous girl he met at the U took a leap of faith and came over to the US in order to marry. After a few months of rendezvous they decided to return to the land of the rising sun. Now, both Christopher and his wife live on one of the words largest islands; enjoying ramen, hot springs, animation, and computer stuff.'
          ]}
          options={{headingJapanese: true}}
        />
      </div>
    )
  }
}

export default MomotofuPage
