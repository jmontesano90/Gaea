import React, { Component } from 'react';
import './infoTile.css';
import { Link } from 'react-router-dom';

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

    let message =
      this.props.expressionValues[this.props.expressionValues.length - 1][
        this.props.species + 1
      ].total +
      ' ' +
      color;
    if (
      this.props.expressionValues[this.props.expressionValues.length - 1][
        this.props.species + 1
      ].total === 0
    ) {
      message = color + ' has gone extinct.';
    }
    return (
      <div className='infoTile'>
        <Link
          to={{
            pathname: `/genes/${color}`,
            state: {
              expressionValues: this.props.expressionValues[
                this.props.expressionValues.length - 1
              ][this.props.species + 1],
            },
          }}
        >
          {message}
        </Link>
      </div>
    );
  }
}

export default InfoTile;
