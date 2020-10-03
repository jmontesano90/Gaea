import React, { Component } from 'react';
import Tile from '../tile/tile';
import './tileHolder.css';
import arrayData from '../../dummyData/arrayData';
import GridContext from '../../GridContext';

class TileHolder extends Component {
  static contextType = GridContext;
  render() {
    let tile1;
    let tile2;
    let tile3;
    let tile4;
    if (this.context.grid) {
      tile1 = arrayData.arrayData[0].map((data, index) => (
        <Tile number={0} grid={this.context.grid[0][index]} key={index}></Tile>
      ));
      tile2 = arrayData.arrayData[1].map((data, index) => (
        <Tile number={1} grid={this.context.grid[1][index]} key={index}></Tile>
      ));
      tile3 = arrayData.arrayData[2].map((data, index) => (
        <Tile number={2} grid={this.context.grid[2][index]} key={index}></Tile>
      ));
      tile4 = arrayData.arrayData[3].map((data, index) => (
        <Tile number={3} grid={this.context.grid[3][index]} key={index}></Tile>
      ));
    }
    return (
      <section className='tiles'>
        {tile1}
        {tile2}
        {tile3}
        {tile4}
      </section>
    );
  }
}

export default TileHolder;
