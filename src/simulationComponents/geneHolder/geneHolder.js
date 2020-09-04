import React, { Component } from 'react';
import './geneHolder.css';
import { Link } from 'react-router-dom';

class GeneHolder extends Component {
  render() {
    return (
      <div className='geneCategory'>
        <h2 className='title'>{this.props.location.state.species}</h2>
        <section className='geneInformation'>
          <div className='geneTile'>
            {' '}
            <Link
              to={{
                pathname: `/simulation/genes/${this.props.location.state.species}/nGRi`,
                state: {
                  name: 'nGRi',
                  listOfGenes: 'ABab',
                  speciesNumber: this.props.location.state.speciesNumber,
                  expressionValues: this.props.location.state.expressionValues,
                  A: Math.round(
                    (this.props.location.state.currentValues.A /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  a: Math.round(
                    (this.props.location.state.currentValues.a /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  B: Math.round(
                    (this.props.location.state.currentValues.B /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  b: Math.round(
                    (this.props.location.state.currentValues.b /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                },
              }}
            >
              nGRi
            </Link>
          </div>
          <div className='geneTile'>
            {' '}
            <Link
              to={{
                pathname: `/simulation/genes/${this.props.location.state.species}/pGRi`,
                state: {
                  name: 'pGRi',
                  listOfGenes: 'CDcd',
                  speciesNumber: this.props.location.state.speciesNumber,
                  expressionValues: this.props.location.state.expressionValues,
                  C: Math.round(
                    (this.props.location.state.currentValues.C /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  c: Math.round(
                    (this.props.location.state.currentValues.c /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  D: Math.round(
                    (this.props.location.state.currentValues.D /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  d: Math.round(
                    (this.props.location.state.currentValues.d /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                },
              }}
            >
              pGRi
            </Link>
          </div>
          <div className='geneTile'>
            <Link
              to={{
                pathname: `/simulation/genes/${this.props.location.state.species}/pBi`,
                state: {
                  name: 'pBi',
                  listOfGenes: 'EFef',
                  speciesNumber: this.props.location.state.speciesNumber,
                  expressionValues: this.props.location.state.expressionValues,
                  E: Math.round(
                    (this.props.location.state.currentValues.E /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  e: Math.round(
                    (this.props.location.state.currentValues.e /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  F: Math.round(
                    (this.props.location.state.currentValues.F /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  f: Math.round(
                    (this.props.location.state.currentValues.f /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                },
              }}
            >
              pBi
            </Link>
          </div>
          <div className='geneTile'>
            <Link
              to={{
                pathname: `/simulation/genes/${this.props.location.state.species}/GR`,
                state: {
                  name: 'GR',
                  listOfGenes: 'KLMklm',
                  speciesNumber: this.props.location.state.speciesNumber,
                  expressionValues: this.props.location.state.expressionValues,
                  K: Math.round(
                    (this.props.location.state.currentValues.K /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  k: Math.round(
                    (this.props.location.state.currentValues.k /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  L: Math.round(
                    (this.props.location.state.currentValues.L /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  l: Math.round(
                    (this.props.location.state.currentValues.l /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  M: Math.round(
                    (this.props.location.state.currentValues.M /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  m: Math.round(
                    (this.props.location.state.currentValues.m /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                },
              }}
            >
              GR
            </Link>
          </div>
          <div className='geneTile'>
            <Link
              to={{
                pathname: `/simulation/genes/${this.props.location.state.species}/LS`,
                state: {
                  name: 'LS',
                  listOfGenes: 'NPOnpo',
                  speciesNumber: this.props.location.state.speciesNumber,
                  expressionValues: this.props.location.state.expressionValues,
                  N: Math.round(
                    (this.props.location.state.currentValues.N /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  O: Math.round(
                    (this.props.location.state.currentValues.O /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  P: Math.round(
                    (this.props.location.state.currentValues.P /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                  n: Math.round(
                    (this.props.location.state.currentValues.n /
                      this.props.location.state.currentValues.total) *
                      100
                  ),

                  o: Math.round(
                    (this.props.location.state.currentValues.o /
                      this.props.location.state.currentValues.total) *
                      100
                  ),

                  p: Math.round(
                    (this.props.location.state.currentValues.p /
                      this.props.location.state.currentValues.total) *
                      100
                  ),
                },
              }}
            >
              LS
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default GeneHolder;
