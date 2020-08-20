import React, { Component } from 'react';
import Tile from '../tile/tile';
import './tileHolder.css';
import arrayData from '../../dummyData/arrayData';

class TileHolder extends Component {
  render() {
    let tile1 = arrayData.arrayData[0].map((data, index) => (
      <Tile number={0}></Tile>
    ));
    let tile2 = arrayData.arrayData[1].map((data, index) => (
      <Tile number={1}></Tile>
    ));
    let tile3 = arrayData.arrayData[2].map((data, index) => (
      <Tile number={2}></Tile>
    ));
    let tile4 = arrayData.arrayData[3].map((data, index) => (
      <Tile number={3}></Tile>
    ));
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
