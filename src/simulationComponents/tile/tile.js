import React, { Component } from 'react';
import './tile.css';

class Tile extends Component {
  render() {
    let tileName = 'tile' + this.props.number;
    let transparency = this.props.grid.plantCount / 6;

    let color;
    if (this.props.grid.species === 1) {
      color = 'red';
    } else if (this.props.grid.species === 2) {
      color = 'blue';
    } else if (this.props.grid.species === 3) {
      color = 'green';
    } else if (this.props.grid.species === 4) {
      color = 'blue';
    } else {
      color = 'black';
    }

    return (
      <section
        style={{ backgroundColor: `${color}`, opacity: `${transparency}` }}
        className={`${tileName} tile`}
      >
        {/* <div>{this.props.grid.tileNumber}</div> */}
      </section>
    );
  }
}

export default Tile;
