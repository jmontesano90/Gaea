import React, { Component } from 'react';
import InfoTile from '../infoTile/infoTile';

class InfoHolder extends Component {
  render() {
    //console.log(this.props.expressionValues[1]);
    let testArray = [1, 2, 3];
    let infoTiles = testArray.map((data, index) => (
      <InfoTile
        expressionValues={this.props.expressionValues[testArray[index]]}
        species={index}
        key={index}
      ></InfoTile>
    ));
    //console.log(this.props.expressionValues[1]);
    return <div>{infoTiles}</div>;
  }
}

export default InfoHolder;
