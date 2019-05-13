import React, { Component, Fragment } from 'react';
import { NORTH, EAST, SOUTH, WEST, RANDOM, SORRY } from '../../constants';
import { number, bool, oneOf, func } from 'prop-types';

class Robot extends Component {

  speak = (phrase) => {
    if ('speechSynthesis' in window) {
      // OK, I pinched this speech function from here:
      // https://usefulangle.com/post/98/javascript-text-to-speech

      // get all voices that browser offers
      var available_voices = window.speechSynthesis.getVoices();

      // this will hold an english voice
      var english_voice = '';

      // find voice by language locale "en-US"
      // if not then select the first voice
      for (var i = 0; i < available_voices.length; i++) {
        if (available_voices[i].lang === 'en-GB') {
          english_voice = available_voices[i];
          break;
        }
      }
      if (english_voice === '')
        english_voice = available_voices[0];

      // new SpeechSynthesisUtterance object
      var utter = new SpeechSynthesisUtterance();
      utter.rate = 1.3;
      utter.pitch = 1;
      utter.text = phrase;
      utter.voice = english_voice;

      window.speechSynthesis.speak(utter);
    }
  }

  report = () => {
    const { x, y, direction, hide } = this.props;
    let phrase = `I am at X: ${x}, Y: ${y}, and facing ${direction}.`;
    // Oh go on then, have an easter egg.
    const easterEgg = Math.floor(Math.random() * Math.floor(5)) === 3;
    if (easterEgg) {
      this.speak(`${phrase} ${RANDOM}`);
    } else {
      this.speak(phrase);
    }

    return (
      <p className="bubble" onClick={hide}>
        {phrase}
        {
          easterEgg &&
            <Fragment><br/>{RANDOM}</Fragment>
        }
      </p>
    );
  }

  render(){
    const { x, y, direction, speaking, error, hide } = this.props;
    if (error) {
      this.speak(SORRY);
    }
    return (
      <div className={`robot at-${x}-${y} ${direction}`}>
        <div className="robot-inner"/>
        { speaking && this.report() }
        {error && <p className="bubble error" onClick={hide}>{SORRY}</p> }
      </div>
    );
  }
}

Robot.defaultProps = {
  hide: () => { }
}

Robot.propTypes = {
  x: number,
  y: number,
  direction: oneOf([NORTH, EAST, SOUTH, WEST]),
  speaking: bool,
  error: bool,
  hide: func
}

export default Robot;