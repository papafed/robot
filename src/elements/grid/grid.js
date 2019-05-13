import React, {Component} from 'react';
import {number, bool, oneOf, func} from 'prop-types';
import {NORTH, EAST, SOUTH, WEST} from '../../constants';
import Robot from '../robot/robot';

class Grid extends Component {

  drawGrid() {
    const grid = [];
    for (let x=4; x > -1; x--) {
      for (let y=0; y < 5; y++) {
        grid.push(<div key={`square-${x}-${y}`} className={`square-${x}-${y}`}>{y}/{x}</div>);
      }
    }
    return grid;
  }

  render() {
    const {x, y, direction, speaking, error, hide} = this.props;
    return (
      <section className="grid-container">
        <div className="grid">
          {this.drawGrid()}
        </div>
        <div className="robot-grid">
          <Robot x={x} y={y} direction={direction} speaking={speaking} error={error} hide={hide}/>
        </div>
      </section>
    )
  }
}

Grid.propTypes = {
  x: number,
  y: number,
  direction: oneOf([NORTH, EAST, SOUTH, WEST]),
  speaking: bool,
  error: bool,
  hide: func
}

export default Grid;