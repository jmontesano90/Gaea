import React, { Component } from 'react';

class GeneTile extends Component {
  render() {
    let genes = this.props.location.state.listOfGenes.split('');
    console.log(
      this.props.location.state.expressionValues[0][
        this.props.location.state.speciesNumber + 1
      ].A
    );
    let currentValues = genes.map((data, index) => (
      <section className='currentValues'>
        {data}: {this.props.location.state[data]}
      </section>
    ));
    let originalValues = genes.map((data, index) => (
      <section className='originalValues'>
        {data}:{' '}
        {(this.props.location.state.expressionValues[0][
          this.props.location.state.speciesNumber + 1
        ][data] /
          6) *
          100}
      </section>
    ));
    return (
      <div>
        <h2>{this.props.location.state.name}</h2>
        <h2>Current Values</h2>
        <section className='currentValues'>{currentValues}</section>
        <h2>Original Values</h2>
        <section className='originalValues'>{originalValues}</section>
      </div>
    );
  }
}

export default GeneTile;
