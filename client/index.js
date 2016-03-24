import React from 'react';
import ReactDOM from 'react-dom';
import { PrismCode } from "react-prism";

import { UnveilApp, Slide, Notes, KeyControls, UIControls, TouchControls, Presenter } from '../../unveil.js/src';
import { SocketReceiver, SocketSender } from '../../unveil-network-sync/src';
import { MediaSender, MediaReceiver, MediaAcceptor, SpeakerPresenter, Voting, Question, Answer, VotingController } from '../../unveil-interactive/src';

let modes = {
  default: {
    controls : [KeyControls, TouchControls, UIControls, SocketReceiver, MediaSender, MediaReceiver, VotingController],
    presenter: Presenter
  },
  speaker: {
    controls : [KeyControls, TouchControls, MediaAcceptor, MediaReceiver, SocketSender, SocketReceiver, VotingController],
    presenter: SpeakerPresenter
  },
  projector: {
    controls : [SocketReceiver, MediaReceiver, VotingController],
    presenter: Presenter
  }
};

ReactDOM.render( (
<section>
  <UnveilApp modes={modes}>
    <Slide name="voting">
      <Voting name="like-slides">
        <Question>How do you like these slides?</Question>
        <Answer value="muchito">A whole lot!</Answer>
        <Answer value="a-bito">So lala...</Answer>
        <Answer value="hatito">Booo!</Answer>
      </Voting>
    </Slide>
    <Slide name="start">
      <h1>Unveil</h1>
      <h2>a meta presentation</h2>
      <Notes>
        heard enough about thesis already<br/>
        now from project perspective
      </Notes>
    </Slide>
    <Slide name="problem">
      <img src="./img/idea.png" />
      <Notes>
        ever since first meeting<br/>
        someone wanted to show something from their device
      </Notes>
    </Slide>
    <Slide name="problem-old-solution">
      <img src="./img/bad-solution.png" />
      <Notes>
        a few ways:<br/>
        - send out emails <br/>
        - tell them to type <br/>
        - connect own device
      </Notes>
    </Slide>
    <Slide name="problem-better-solution">
      <img src="./img/better-solution.png" />
      <Notes>
        got me thinking:<br/>
        - why not send it to projector? <br/>
        - other ways of using phone??
      </Notes>
    </Slide>
    <Slide name="possibilities-phones">
      <img src="./img/possibilities-phones.png" />
      <Notes>
        remote control, polling, feeding...
      </Notes>
    </Slide>

    <Slide name="science">
      <h1>Relevant Research...</h1>
      <Notes>
        research has shown
      </Notes>
    </Slide>
    <Slide name="science-negative">
      <ul>
        <li>"A Comparative Analysis of Meeting Participant Perception and Use of Smartphones and Other Mobile Devices during Meetings" – Bajko et al. 2013</li>
        <li>"The Impact of Mobile Phone Usage on Student Learning" – Kuznekoff and Titsworth 2013</li>
      </ul>
      <Notes>
        - perceived as rude, bla bla
      </Notes>
    </Slide>
    <Slide name="science-positive">
      <ul>
        <li>"Smartphone use does not have to be rude: making phones a collaborative presence in meetings" – Böhmer et al. 2013</li>
        <li>"Mobile Phones in the Classroom: Examining the Effects of Texting, Twitter, and Message Content on Student Learning" – Kuznekoff et al. 2015</li>
        <li>"Office Social: Presentation Interactivity for Nearby Devices" – Chattopadhyay et al. 2016</li>
      </ul>
      <Notes>
        - can engage audience in presentations <br/>
        - and strengthen understanding in lectures <br/>
        - bring everyboy closer together in meetings
      </Notes>
    </Slide>
    <Slide name="explore">
      <h1>Explore...</h1>
      <Notes>
        I wanted to explore the potential of mobile devices<br/>

      </Notes>
    </Slide>
    <Slide name="reveal">
      <h1>reveal.js</h1>
      <Notes>
        revealjs is a 4500+ line lib with plugins <br/>
        no separation of rendering, navigation, routing...<br/>
        plugins messed up (several servers etc.)<br/><br/>
        developed base lib with friend<br/>
        adjusted to my needs + added my features
      </Notes>
    </Slide>
    <Slide name="behind-the-scenes">
      <h1>Behind the Scenes</h1>
    </Slide>
    <Slide name="technologies">
      <img src="./img/rxjs-logo.png" />
      <img src="./img/react-logo.png" />
      <img src="./img/socketio-logo.gif" />
    </Slide>
    <Slide name="architecture">
      <h1>Architecture</h1>
      <ul>
        <li><strong>Presenter</strong> – How should slides be rendered?</li>
        <li><strong>Controls</strong> – How should slides interact?</li>
      </ul>
    </Slide>
    <Slide name="modes">
      <h1>Mode Definition</h1>
      <pre><PrismCode className="language-javascript">{
`// imports...

let modes = {
  'default': {
    'controls': [KeyControls, TouchControls, UIControls, SocketReceiver, MediaSender, MediaReceiver],
    'presenter': Presenter
  },
  'speaker': {
    'controls': [KeyControls, TouchControls, SocketReceiver, SocketSender, MediaAcceptor, MediaReceiver],
    'presenter': SpeakerPresenter
  },
  'projector': {
    'controls': [SocketReceiver, MediaReceiver],
    'presenter': Presenter
  }
};`
      }
      </PrismCode></pre>
    </Slide>
    <Slide name="slides">
      <h1>Slides</h1>
      <pre><PrismCode className="language-html">{
`ReactDOM.render( (
  <UnveilApp modes={modes}>
    <Slide name="explore">
      <h1>Explore...</h1>
      <Notes>
        wanted to explore the potential of mobile devices
      </Notes>
    </Slide>
    <Slide name="reveal">
      <h1>reveal.js</h1>
    </Slide>
  </UnveilApp>
) );`
    }
    </PrismCode></pre>
    </Slide>
    <Slide name="styling">
      <h1>Styles</h1>
      <pre><PrismCode className="language-css">{
        `.slide {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#explore {
  background-image: url('../img/explore.jpg');
  color: #fff;
}

#reveal {
  background-image: url('../img/reveal-js.png')
}`
      }
      </PrismCode></pre>
    </Slide>
    <Slide name="result">
      <h1>Result</h1>
      <pre><PrismCode className="language-html">{
`<section id="unveil">
  <section data-reactroot="">
    <div class="controls">
      <!-- controls -->
    </div>
    <section id="explore" class="slide">
      <div class="slide-content">
        <h1>Explore...</h1>
      </div>
    </section>
  </section>
</section>`
      }
      </PrismCode></pre>
    </Slide>
    <Slide name="controls">
      <h1>Controls</h1>
      <pre><PrismCode className="language-javascript">{
`// imports...
export default React.createClass({
  propTypes: {
    navigator: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    Observable.fromEvent(socket, 'state:change')
      .subscribe(this.props.navigator.next);
  },

  render: function () {
    return false;
  }
});`
      }
      </PrismCode></pre>
    </Slide>
    <Slide name="future">
      <h1>outlook...</h1>
      <ul>
        <li>Saving State Changes</li>
        <li>Allow listeners to move independently</li>
        <li>Polls</li>
        <li>Mood-Metre</li>
      </ul>
      <Notes>
        unveil: publish, create converter etc.<br/><br/>

        master project: implement more feature<br/>
        - polls<br/>
        - mood-metre
      </Notes>
    </Slide>
    <Slide name="ip">
      <h1><code>10.29.0.138:3000</code></h1>
      <Notes>
        Tell people to go to this ip :)
      </Notes>
    </Slide>
    <Slide name="demo">
      <h1>Demo Time</h1>
      <Notes>Wait until people are connected...</Notes>
    </Slide>

  </UnveilApp>
</section>
), document.getElementById('unveil'));
