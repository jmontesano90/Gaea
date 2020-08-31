import React, { Component } from 'react';

class InfoTile extends Component {
  render() {
    let color = '';
    if (this.props.species === 0) {
      color = 'Red';
    } else if (this.props.species === 1) {
      color = 'Blue';
    } else if (this.props.species === 2) {
      color = 'Green';
    }
    let message = this.props.expressionValues.total + ' of species ' + color;
    if (this.props.expressionValues.total === 0) {
      message = color + ' has gone extinct.';
    }
    return <div> {message}</div>;
  }
}

export default InfoTile;
