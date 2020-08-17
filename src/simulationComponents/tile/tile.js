import React, { Component } from 'react';
import './tile.css';

class Tile extends Component {
  render() {
    let tileName = 'tile' + this.props.number;
    return <section className={`${tileName} tile`}></section>;
  }
}

export default Tile;
