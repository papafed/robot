import React, { Component } from 'react';
import { func } from 'prop-types';
import { NORTH, EAST, SOUTH, WEST } from '../../constants';

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      x: null,
      y: null,
      direction: NORTH,
    }
  }

  selectDirection = (ev) => {
    this.setState({ direction: ev.target.value });
  }

  changeX = (ev) => {
    const val = ev.target.value
    this.setState({ x: !!val ? parseInt(val) : null });
  }

  changeY = (ev) => {
    const val = ev.target.value
    this.setState({ y: !!val ? parseInt(val) : null });
  }

  onPlace = (ev) => {
    const { x, y, direction } = this.state;
    if (x !== null && y !== null) {
      this.props.onPlace(x, y, direction);
    }
  }

  render() {
    const { onLeft, onRight, onMove, onReport } = this.props;
    const { x, y } = this.state;
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
          <input id="x" type="number" min='0' max='4' step='1' onChange={ this.changeX } />
          <label htmlFor='y'>Y:</label>
          <input id="y" type="number" min='0' max='4' step='1' onChange={ this.changeY } />
          <label htmlFor='facing'>Facing:</label>
          <select id="facing" type="number" onChange={ this.selectDirection }>
            <option value={NORTH}>North</option>
            <option value={EAST}>East</option>
            <option value={SOUTH}>South</option>
            <option value={WEST}>West</option>
          </select>
        <button disabled={x === null || y === null} type="button" onClick={ this.onPlace }>Place</button>

          <h4>Speak to me</h4>
          <button type="button" onClick={onReport}>Report</button>

      </section>
    );
  }
}

const noop = () => { };

Controls.defaultProps = {
  onLeft: noop,
  onRight: noop,
  onMove: noop,
  onPlace: noop,
  onReport: noop
}

Controls.propTypes = {
  onLeft: func,
  onRight: func,
  onMove: func,
  onPlace: func,
  onReport: func
}

export default Controls;
