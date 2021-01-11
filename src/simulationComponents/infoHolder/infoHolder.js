//Shows user how many days have passed
//Also renders the holder for the links to individual species genetic information
import React, { Component } from 'react';
import InfoTile from '../infoTile/infoTile';
import './infoHolder.css';
import GridContext from '../../GridContext';

class InfoHolder extends Component {
  static contextType = GridContext;
  render() {
    let testArray = [1, 2, 3];
    let infoTiles;
    if (this.context.turnData && this.context.turnData.length > 0) {
      infoTiles = testArray.map((data, index) => (
        <InfoTile
          expressionValues={this.context.turnData}
          species={index}
          key={index}
        ></InfoTile>
      ));
    } else {
      infoTiles = <div>Click Above to start the simulation</div>;
    }


    return (
      <div>
        <div className='infoTiles SBG'>{infoTiles}</div>
      </div>
    );
  }
}

export default InfoHolder;
