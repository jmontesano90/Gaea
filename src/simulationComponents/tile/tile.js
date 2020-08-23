import React, { Component } from 'react';
import './tile.css';

class Tile extends Component {
  render() {
    let tileName = 'tile' + this.props.number;
    let color;
    if (this.props.grid.species === 1) {
      color = 'red';
    } else if (this.props.grid.species === 2) {
      color = 'yellow';
    } else if (this.props.grid.species === 3) {
      color = 'purple';
    } else if (this.props.grid.species === 4) {
      color = 'magenta';
    } else {
      color = 'black';
    }

    return (
      <section
        style={{ backgroundColor: `${color}` }}
        className={`${tileName} tile`}
      ></section>
    );
  }
}

export default Tile;
