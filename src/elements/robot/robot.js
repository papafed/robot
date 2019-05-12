import React, { Component, Fragment } from 'react';
import {RANDOM, SORRY} from '../../constants';

class Robot extends Component {

  report = () => {
    const {x, y, direction} = this.props;

    return (
      <p className="bubble">
        {`I am at X: ${x}, Y: ${y}, and facing ${direction}.`}
        { 
          // Oh go on then, have an easter egg.
          Math.floor(Math.random() * Math.floor(5)) === 3 && 
            <Fragment><br/>{RANDOM}</Fragment> 
        }
      </p>
    );
  }

  render(){
    const {x, y, direction, speaking, error} = this.props;
    return (
      <div className={`robot at-${x}-${y} ${direction}`}>
        <div className="robot-inner"/>
        { speaking && this.report() }
        { error && <p className="bubble error">{SORRY}</p> }
      </div>
    );
  }

}

export default Robot;