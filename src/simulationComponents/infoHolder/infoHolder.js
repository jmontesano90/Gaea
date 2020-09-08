import React, { Component } from 'react';
import InfoTile from '../infoTile/infoTile';
import './infoHolder.css';
import GridContext from '../../GridContext';

class InfoHolder extends Component {
  static contextType = GridContext;
  render() {
    let testArray = [1, 2, 3];
    let infoTiles;
    if (this.context.turnData.length > 0) {
      infoTiles = testArray.map((data, index) => (
        <InfoTile
          expressionValues={this.context.turnData}
          species={index}
          key={index}
        ></InfoTile>
      ));
    } else {
      infoTiles = <div>Click Above to start the game</div>;
    }

    return <div className='infoTiles'>{infoTiles}</div>;
  }
}

export default InfoHolder;
