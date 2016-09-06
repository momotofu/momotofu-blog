import React from 'react'
import ReactDOM from 'react-dom'
import Section from '../../components/blog-post/section'

require('./index.styl')

var MomotofuPage = React.createClass({
  scrollToTarget: function(targetID) {
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
  render: function() {
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
            'Christopher came from a once small town named St. George, in Southern Utah. He is the second oldest in a family of six; consisting of two brothers, one sister, and two parents. Ever since he was a child he had a fascination with Japan (probably from watching Saturday morning Dragon Ball Z and from eating a lot of tasteful sushi). From elementary school to high school, Christopher showed a talent for art and had an eye of curiosity for just about everything.',
            'Once he finished high school, Christopher set out to college at Dixie State University. While there, he thought the academic pace was slow, and began to feel incredibly bored. The time at DSU started to attenuate Christopher’s faith in colleges. However, after obtaining an Associates of Science, he decided to escape the Southern Utah Bubble (S.U.B. - erbs), and give the University of Utah a go.',
            'The electric pulse of Salt Lake City awakened his senses. At the U Christopher found a cornucopia of experience, knowledge, culture, and friends. The variety of class domains was overwhelming to the curious mind, and like an ADHD sponge, Christopher soaked himself in classes from Japanese, Animation, Computer Science, and Graphic Design. Unfortunately for him though, there wasn’t a degree made up of all those subjects.',
            'One day while walking through the University Library, he mustered the courage to asked if he could sit at the table of a beautiful girl. After a couple of sentence exchanges and body language, they realized they were two kindred spirits and soon began to dating. After a couple of months she went back to Japan, and Christopher who had been working as a waiter and freelance designer, started to work extra hard in order to afford frequent trips to Japan.',
            'Eventually Christopher found himself working on a product team and an engineering team over at Movement Ventures. There, in the space of a year, he went from 12$ an hour to a 40k salary, to a 50k salary, and then finally to a 60k salary. That gorgeous girl he met at the U took a leap of faith and came over to the US in order to marry. Now both Christopher and his wife have moved to the land of the rising son, enjoying ramen, hot springs, and computer stuff.'
          ]}
          options={{headingJapanese: true}}
        />
      </div>
    )
  }
})

export default MomotofuPage