import React, { Component } from 'react';
import './geneHolder.css';
import { Link } from 'react-router-dom';

class GeneHolder extends Component {
  render() {
    return (
      <div className='geneCategory'>
        <div>{this.props.location.state.species}</div>
        <div>{this.props.location.state.currentValues.total}</div>
        <section className='geneInformation'>
          <div className='geneTile'>
            {' '}
            <Link
              to={{
                pathname: `/genes/${this.props.location.state.species}/nGRi`,
                state: {
                  name: 'nGRi',
                  listOfGenes: 'AaBb',
                  speciesNumber: this.props.location.state.speciesNumber,
                  expressionValues: this.props.location.state.expressionValues,
                  A:
                    (this.props.location.state.currentValues.A /
                      this.props.location.state.currentValues.total) *
                    100,
                  a:
                    (this.props.location.state.currentValues.a /
                      this.props.location.state.currentValues.total) *
                    100,
                  B:
                    (this.props.location.state.currentValues.B /
                      this.props.location.state.currentValues.total) *
                    100,
                  b:
                    (this.props.location.state.currentValues.b /
                      this.props.location.state.currentValues.total) *
                    100,
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
                pathname: `/genes/${this.props.location.state.species}/pGRi`,
                state: {
                  name: 'pGRi',
                  listOfGenes: 'CcDd',
                  speciesNumber: this.props.location.state.speciesNumber,
                  expressionValues: this.props.location.state.expressionValues,
                  C:
                    (this.props.location.state.currentValues.C /
                      this.props.location.state.currentValues.total) *
                    100,
                  c:
                    (this.props.location.state.currentValues.c /
                      this.props.location.state.currentValues.total) *
                    100,
                  D:
                    (this.props.location.state.currentValues.D /
                      this.props.location.state.currentValues.total) *
                    100,
                  d:
                    (this.props.location.state.currentValues.d /
                      this.props.location.state.currentValues.total) *
                    100,
                },
              }}
            >
              pGRi
            </Link>
          </div>
          <div className='geneTile'>
            <Link
              to={{
                pathname: `/genes/${this.props.location.state.species}/pBi`,
                state: {
                  name: 'pBi',
                  listOfGenes: 'EeFf',
                  speciesNumber: this.props.location.state.speciesNumber,
                  expressionValues: this.props.location.state.expressionValues,
                  E:
                    (this.props.location.state.currentValues.E /
                      this.props.location.state.currentValues.total) *
                    100,
                  e:
                    (this.props.location.state.currentValues.e /
                      this.props.location.state.currentValues.total) *
                    100,
                  F:
                    (this.props.location.state.currentValues.F /
                      this.props.location.state.currentValues.total) *
                    100,
                  f:
                    (this.props.location.state.currentValues.f /
                      this.props.location.state.currentValues.total) *
                    100,
                },
              }}
            >
              pBi
            </Link>
          </div>
          <div className='geneTile'>
            <Link
              to={{
                pathname: `/genes/${this.props.location.state.species}/GR`,
                state: {
                  name: 'GR',
                  listOfGenes: 'KkLlMm',
                  speciesNumber: this.props.location.state.speciesNumber,
                  expressionValues: this.props.location.state.expressionValues,
                  K:
                    (this.props.location.state.currentValues.K /
                      this.props.location.state.currentValues.total) *
                    100,
                  k:
                    (this.props.location.state.currentValues.k /
                      this.props.location.state.currentValues.total) *
                    100,
                  L:
                    (this.props.location.state.currentValues.L /
                      this.props.location.state.currentValues.total) *
                    100,
                  l:
                    (this.props.location.state.currentValues.l /
                      this.props.location.state.currentValues.total) *
                    100,
                  M:
                    (this.props.location.state.currentValues.M /
                      this.props.location.state.currentValues.total) *
                    100,
                  m:
                    (this.props.location.state.currentValues.m /
                      this.props.location.state.currentValues.total) *
                    100,
                },
              }}
            >
              GR
            </Link>
          </div>
          <div className='geneTile'>
            <Link
              to={{
                pathname: `/genes/${this.props.location.state.species}/LS`,
                state: {
                  name: 'LS',
                  listOfGenes: 'NnOoPp',
                  speciesNumber: this.props.location.state.speciesNumber,
                  expressionValues: this.props.location.state.expressionValues,
                  N:
                    (this.props.location.state.currentValues.N /
                      this.props.location.state.currentValues.total) *
                    100,
                  n:
                    (this.props.location.state.currentValues.n /
                      this.props.location.state.currentValues.total) *
                    100,
                  O:
                    (this.props.location.state.currentValues.O /
                      this.props.location.state.currentValues.total) *
                    100,
                  o:
                    (this.props.location.state.currentValues.o /
                      this.props.location.state.currentValues.total) *
                    100,
                  P:
                    (this.props.location.state.currentValues.P /
                      this.props.location.state.currentValues.total) *
                    100,
                  p:
                    (this.props.location.state.currentValues.p /
                      this.props.location.state.currentValues.total) *
                    100,
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
