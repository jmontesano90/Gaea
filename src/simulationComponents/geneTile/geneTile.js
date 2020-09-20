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
      valuesClass = 'values4 SBG';
      valuesO = 'valuesO4 SBG';
    } else if (this.props.location.state.name === 'GR') {
      valuesClass = 'values6 SBG';
      valuesO = 'valuesO5 SBG';
    } else {
      valuesClass = 'values6 SBG';
      valuesO = 'values6 SBG';
    }

    let half = Math.ceil(genes.length / 2);
    let genesTest = genes.splice(0, half);
    console.log(genesTest);
    let currentValuesTest = genesTest.map((data, index) => (
      <section className='oneTrait'>
        <div>
          {data}/{genes[index]}
        </div>
        <div>
          {this.props.location.state[data]}/
          {this.props.location.state[genes[index]]}
        </div>
      </section>
    ));

    let originalValuesTest = genesTest.map((data, index) => (
      <section className='oneTrait'>
        <div>
          {data}/{genes[index]}
        </div>
        <div>
          {Math.round(
            (this.props.location.state.expressionValues[0][
              this.props.location.state.speciesNumber + 1
            ][data] /
              6) *
              100
          )}
          /
          {Math.round(
            (this.props.location.state.expressionValues[0][
              this.props.location.state.speciesNumber + 1
            ][genes[index]] /
              6) *
              100
          )}
        </div>
      </section>
    ));

    let dnaValues = this.props.location.state.listOfGenes
      .split('')
      .map((data, index) => (
        <section>
          {data}: {dnaHelper.dnaKey[data]}
        </section>
      ));
    return (
      <div className='traitInformation'>
        <h2 className='title SBG'>
          {color}: {this.props.location.state.name}
        </h2>

        <div>
          <div className='valueTitles'>
            <h4 className='SBG'>Current Values</h4>
            <h4 className='SBG'>Original Values</h4>
          </div>
          <div className='valuesBox'>
            <section className={valuesClass}>{currentValuesTest}</section>
            <section className={valuesClass}>{originalValuesTest}</section>
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
