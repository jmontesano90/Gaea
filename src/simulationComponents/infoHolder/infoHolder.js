import React, { Component } from 'react';
import InfoTile from '../infoTile/infoTile';
import './infoHolder.css';
import GridContext from '../../GridContext';

class InfoHolder extends Component {
  static contextType = GridContext;
  render() {
    let testArray = [1, 2, 3];
    let infoTiles;
    let loadingStats;
    if (this.context.imageReady === false) {
      loadingStats = <div>Loading!</div>;
    } else {
      loadingStats = <div></div>;
    }
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
    let dayCount;

    if (this.context.turnData.length / 2 === 1) {
      dayCount = (
        <div className='dayCountContainer'>
          <div className='dayCount'>1 day has passed.</div>
        </div>
      );
    } else if (this.context.turnData.length / 2 > 1) {
      dayCount = (
        <div className='dayCountContainer'>
          <div className='dayCount'>
            {this.context.turnData.length / 2} days have passed.
          </div>
        </div>
      );
    }
    return (
      <div>
        {dayCount}
        <div className='infoTiles'>{infoTiles}</div>
        {loadingStats}
      </div>
    );
  }
}

export default InfoHolder;
