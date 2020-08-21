import React, { Component } from 'react';
import './tile.css';

class Tile extends Component {
  render() {
    let tileName = 'tile' + this.props.number;
    let color = this.props.grid.color;
    return (
      <section
        style={{ backgroundColor: `${color}` }}
        className={`${tileName} tile`}
      ></section>
    );
  }
}

export default Tile;
