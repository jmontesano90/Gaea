import React, { Component } from 'react';
import './geneHolder.css';
import { Link } from 'react-router-dom';

class GeneHolder extends Component {
  render() {
    return (
      <div className='geneCategory'>
        <div>{this.props.location.state.species}</div>
        <div>{this.props.location.state.expressionValues.total}</div>
        <section className='geneInformation'>
          <div className='geneTile'>
            {' '}
            <Link
              to={{
                pathname: `/genes/${this.props.location.state.species}/nGRi`,
                state: {
                  name: 'nGRi',
                  listOfGenes: 'AaBb',
                  A:
                    (this.props.location.state.expressionValues.A /
                      this.props.location.state.expressionValues.total) *
                    100,
                  a:
                    (this.props.location.state.expressionValues.a /
                      this.props.location.state.expressionValues.total) *
                    100,
                  B:
                    (this.props.location.state.expressionValues.B /
                      this.props.location.state.expressionValues.total) *
                    100,
                  b:
                    (this.props.location.state.expressionValues.b /
                      this.props.location.state.expressionValues.total) *
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
                  C:
                    (this.props.location.state.expressionValues.C /
                      this.props.location.state.expressionValues.total) *
                    100,
                  c:
                    (this.props.location.state.expressionValues.c /
                      this.props.location.state.expressionValues.total) *
                    100,
                  D:
                    (this.props.location.state.expressionValues.d /
                      this.props.location.state.expressionValues.total) *
                    100,
                  d:
                    (this.props.location.state.expressionValues.d /
                      this.props.location.state.expressionValues.total) *
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
                  E:
                    (this.props.location.state.expressionValues.E /
                      this.props.location.state.expressionValues.total) *
                    100,
                  e:
                    (this.props.location.state.expressionValues.e /
                      this.props.location.state.expressionValues.total) *
                    100,
                  F:
                    (this.props.location.state.expressionValues.F /
                      this.props.location.state.expressionValues.total) *
                    100,
                  f:
                    (this.props.location.state.expressionValues.f /
                      this.props.location.state.expressionValues.total) *
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
                  K:
                    (this.props.location.state.expressionValues.K /
                      this.props.location.state.expressionValues.total) *
                    100,
                  k:
                    (this.props.location.state.expressionValues.k /
                      this.props.location.state.expressionValues.total) *
                    100,
                  L:
                    (this.props.location.state.expressionValues.L /
                      this.props.location.state.expressionValues.total) *
                    100,
                  l:
                    (this.props.location.state.expressionValues.l /
                      this.props.location.state.expressionValues.total) *
                    100,
                  M:
                    (this.props.location.state.expressionValues.M /
                      this.props.location.state.expressionValues.total) *
                    100,
                  m:
                    (this.props.location.state.expressionValues.m /
                      this.props.location.state.expressionValues.total) *
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
                  listofGenes: 'NnOoPp',
                  N:
                    (this.props.location.state.expressionValues.N /
                      this.props.location.state.expressionValues.total) *
                    100,
                  n:
                    (this.props.location.state.expressionValues.n /
                      this.props.location.state.expressionValues.total) *
                    100,
                  O:
                    (this.props.location.state.expressionValues.O /
                      this.props.location.state.expressionValues.total) *
                    100,
                  o:
                    (this.props.location.state.expressionValues.o /
                      this.props.location.state.expressionValues.total) *
                    100,
                  P:
                    (this.props.location.state.expressionValues.P /
                      this.props.location.state.expressionValues.total) *
                    100,
                  p:
                    (this.props.location.state.expressionValues.p /
                      this.props.location.state.expressionValues.total) *
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
