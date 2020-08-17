import React, { Component } from 'react';
import Tile from '../tile/tile';
import './tileHolder.css';
import arrayData from '../../dummyData/arrayData';

class TileHolder extends Component {
  render() {
    console.log(arrayData.arrayData[0]);
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
        {/* <div className='fourths'>{tile1}</div>
        <div className='fourths'>{tile2}</div>
        <div className='fourths'>{tile3}</div>
        <div className='fourths'>{tile4}</div> */}
        {tile1}
        {tile2}
        {tile3}
        {tile4}
      </section>
    );
  }
}

export default TileHolder;
