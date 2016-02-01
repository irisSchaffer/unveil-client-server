import React from 'react';
import ReactDOM from 'react-dom';

import { UnveilApp, Slide, Notes, KeyControls, UIControls, TouchControls, Presenter } from '../../unveil-fork/src';
import { SocketReceiver, SocketSender } from '../../unveil-network-sync/src';
import { MediaSender, MediaReceiver, MediaAcceptor, SpeakerPresenter } from '../../unveil-interactive/src';

let modes = {
  default: {
    controls: [KeyControls, TouchControls, UIControls, SocketReceiver, MediaSender, MediaReceiver],
    presenter: Presenter
  },
  speaker: {
    controls: [KeyControls, TouchControls, SocketReceiver, SocketSender, MediaAcceptor, MediaReceiver],
    presenter: SpeakerPresenter
  },
  projector: {
    controls: [SocketReceiver, MediaReceiver],
    presenter: Presenter
  }
};

ReactDOM.render( (
<section>
  <UnveilApp modes={modes}>
    <Slide name="start">
      <h1>Unveil</h1>
      <h2>A Meta Presentation</h2>
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
      <h1>The science behind it...</h1>
      <Notes>
        science has shown
      </Notes>
    </Slide>
    <Slide name="science-negative">
      <img src="./img/science-negative.png" />
      <Notes>
        - perceived as rude, bla bla
      </Notes>
    </Slide>
    <Slide name="science-positive">
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
        Guessed right, already see it in action!
      </Notes>
    </Slide>

    <Slide name="ip">
      <h1><code>192.168.0.108:3000</code></h1>
    </Slide>

    <Slide name="challenges">
      <h1>Challenges</h1>
    </Slide>
    <Slide name="challenges-reveal">
      <h1>reveal.js</h1>
      <Notes>
        revealjs is a 4500+ line lib with plugins <br/>
        no separation of rendering, navigation, routing...<br/>
        plugins messed up (several servers etc.)<br/><br/>
        developed base lib with friend<br/>
        adjusted to my needs + added my features
      </Notes>
    </Slide>
    <Slide name="technologies">
      <img src="./img/rxjs-logo.png" />
      <img src="./img/react-logo.png" />
      <img src="./img/socketio-logo.gif" />
    </Slide>
    <Slide name="future">
      <h1>outlook...</h1>
      <Notes>
        unveil: publish, create converter etc.<br/><br/>

        master project: implement more feature<br/>
        - polls
        - mood-metre
      </Notes>
    </Slide>

  </UnveilApp>
</section>
), document.getElementById('unveil'));
