import React, { Component } from 'react';
import './infoTile.css';
import { Link } from 'react-router-dom';

class InfoTile extends Component {
  state = {
    expressionValues: this.props.expressionValues,
    species: this.props.species,
  };
  render() {
    let color = '';
    let currentValues;
    let message;
    if (this.props.expressionValues) {
      if (this.props.species === 0) {
        color = 'Red';
      } else if (this.props.species === 1) {
        color = 'Blue';
      } else if (this.props.species === 2) {
        color = 'Green';
      }

      currentValues = this.state.expressionValues[
        this.state.expressionValues.length - 1
      ][this.state.species + 1];
      message =
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
    }
    return (
      <div className='infoTile '>
        <Link
          to={{
            pathname: `/simulation/genes/${color}`,
            state: {
              species: color,
              speciesNumber: this.props.species,
              expressionValues: this.state.expressionValues,
              currentValues: currentValues,
              key: Math.round(Math.random() * 10),
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
