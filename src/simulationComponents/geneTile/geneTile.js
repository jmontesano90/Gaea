import React, { Component } from 'react';
import dnaHelper from '../../dnaHelper';
import Collapsible from 'react-collapsible';
import DnaHelper from '../../dnaHelper';
import './geneTile.css';

class GeneTile extends Component {
  render() {
    let genes = this.props.location.state.listOfGenes.split('');
    let color = '';
    if (this.props.location.state.speciesNumber === 0) {
      color = 'Red';
    } else if (this.props.location.state.speciesNumber === 1) {
      color = 'Blue';
    } else if (this.props.location.state.speciesNumber === 2) {
      color = 'Green';
    }
    let valuesClass = '';
    let valuesO = '';
    if (genes.length === 4) {
      valuesClass = 'values4';
      valuesO = 'valuesO4';
    } else {
      valuesClass = 'values6';
      valuesO = 'valuesO6';
    }

    let currentValues = genes.map((data, index) => (
      <section className={data.toUpperCase()}>
        {data}: {this.props.location.state[data]}%
      </section>
    ));
    let originalValues = genes.map((data, index) => (
      <section className='originalValues'>
        {data}:{' '}
        {Math.round(
          (this.props.location.state.expressionValues[0][
            this.props.location.state.speciesNumber + 1
          ][data] /
            6) *
            100
        )}
        %
      </section>
    ));
    let dnaValues = genes.map((data, index) => (
      <section>
        {data}: {dnaHelper.dnaKey[data]}
      </section>
    ));
    return (
      <div className='traitInformation'>
        <h2 className='title'>
          {color}: {this.props.location.state.name}
        </h2>

        <div>
          <div className='valueTitles'>
            <h4>Current Values</h4>
            <h4>Original Values</h4>
          </div>
          <div className='valuesBox'>
            <section className={valuesClass}>{currentValues}</section>
            <section className={valuesClass}>{originalValues}</section>
          </div>
        </div>
        <Collapsible trigger='Trait Explanation' className='explanation'>
          <div className={valuesO}> {dnaValues}</div>
          {DnaHelper.traitExplanation[this.props.location.state.name]}
        </Collapsible>
      </div>
    );
  }
}

export default GeneTile;
