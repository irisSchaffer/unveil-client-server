import React from 'react';
import ReactDOM from 'react-dom';

import { UnveilApp, Slide, Notes, KeyControls, UIControls, TouchControls, Presenter } from '../../unveil-fork/src';
import { SocketReceiver, SocketSender } from 'unveil-network-sync/lib';
import { MediaSender, MediaReceiver, MediaAcceptor, SpeakerPresenter } from '../../unveil-interactive/src';

let modes = {
  default: {
    controls: [KeyControls, TouchControls, UIControls, SocketReceiver, MediaSender, MediaReceiver],
    presenter: Presenter
  },
  speaker: {
    controls: [KeyControls, TouchControls, UIControls, SocketReceiver, SocketSender, MediaAcceptor, MediaReceiver],
    presenter: SpeakerPresenter
  },
  projector: {
    controls: [SocketReceiver],
    presenter: Presenter
  }
};

ReactDOM.render( (
<section>
  <UnveilApp modes={modes}>
    <Slide name="intro" id="intro">
      <Slide name="start">
        <h1>Interactive Presentations</h1>
        <h2>Iris Schaffer</h2>
      </Slide>
      <Slide>
        <h1>First things first...</h1>
      </Slide>

      <Slide>
        <h1><code>192.168.0.103:3000</code></h1>
      </Slide>
    </Slide>

    <Slide name="story">
      <h1>Story</h1>
      <Notes>
        <ul>
          <li>Reveal js stupid</li>
          <li>Evaluated others, talked to friend, built own</li>
          <li>Which I adapted to my needs</li>
        </ul>
      </Notes>
    </Slide>
  </UnveilApp>
</section>
), document.getElementById('unveil'));
