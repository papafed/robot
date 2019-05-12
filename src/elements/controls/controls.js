import React, { Component } from 'react';
import { func } from 'prop-types';
import { NORTH, EAST, SOUTH, WEST } from '../../constants';

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      x: 3, 
      y: 3,
      direction: NORTH,
    }
  }

  selectDirection = (event) => {
    console.log(event.target.value)
  }

  render() {
    const { onLeft, onRight, onMove, onPlace, onReport } = this.props;
    return (
      <section className="controls">
        <h3>Controls</h3>
        <p>Press one of the buttons to move the robot around the grid</p>
     
          <h4>Rotate</h4>
          <button type="button" onClick={onLeft}>Left</button>
          <button type="button" onClick={onRight}>Right</button>

          <h4>Move 1 square</h4>
          <button type="button" onClick={onMove}>Move</button>

          <h4>Place on square</h4>
          <label htmlFor='x'>X:</label>
          <input id="x" type="number" />
          <label htmlFor='y'>Y:</label>
          <input id="y" type="number" />
          <label htmlFor='facing'>Facing:</label>
          <select id="facing" type="number" onChange={this.selectDirection}>
            <option value={NORTH}>North</option>
            <option value={EAST}>East</option>
            <option value={SOUTH}>South</option>
            <option value={WEST}>West</option>
          </select>
          <button type="button" onClick={onPlace}>Place</button>

          <h4>Speak to me</h4>
          <button type="button" onClick={onReport}>Report</button>

      </section>
    );
  }
}

Controls.propTypes = {
  onLeft: func,
  onRight: func,
  onMove: func,
  onPlace: func,
  onReport: func
}

export default Controls;
