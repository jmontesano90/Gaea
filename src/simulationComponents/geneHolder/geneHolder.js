//Renders and passes information to all the different traits depending on the species
import React, { Component } from 'react';
import './geneHolder.css';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';

class GeneHolder extends Component {
  render() {
    let geneCategories;
    if (this.props.location) {
      geneCategories = (
        <div className='geneCategory'>
       
          <section className='geneInformation SBG'>
            {/* <div className="geneTitle">{this.props.location.state.species} Genes</div> */}
          
          <div className='geneTile'>
              <Link
                to={{
                  pathname: `/simulation/genes/${this.props.location.state.species}/LS`,
                  key: 'LS',
                  state: {
                    name: 'LS',
                    listOfGenes: 'NPOnpo',
                    speciesNumber: this.props.location.state.speciesNumber,
                    expressionValues: this.props.location.state
                      .expressionValues,
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
                Life Span
              </Link>
            </div>
            <div className='geneTile'>
              <Link
                to={{
                  pathname: `/simulation/genes/${this.props.location.state.species}/GR`,
                  key: 'GR',
                  state: {
                    name: 'GR',
                    listOfGenes: 'KLMklm',
                    speciesNumber: this.props.location.state.speciesNumber,
                    expressionValues: this.props.location.state
                      .expressionValues,
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
                Growth Rate
              </Link>
            </div>
            <Collapsible trigger="Additional Traits">
            <div className='geneTile'>
              {' '}
              <Link
                to={{
                  pathname: `/simulation/genes/${this.props.location.state.species}/nGRi`,
                  key: 'nGRi',
                  state: {
                    name: 'nGRi',
                    listOfGenes: 'ABab',
                    speciesNumber: this.props.location.state.speciesNumber,
                    expressionValues: this.props.location.state
                      .expressionValues,
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
                Negative Growth Rate Influence
              </Link>
            </div>
            <div className='geneTile'>
              {' '}
              <Link
                to={{
                  pathname: `/simulation/genes/${this.props.location.state.species}/pGRi`,
                  key: 'pGRi',
                  state: {
                    name: 'pGRi',

                    listOfGenes: 'CDcd',
                    speciesNumber: this.props.location.state.speciesNumber,
                    expressionValues: this.props.location.state
                      .expressionValues,
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
                Positive Growth Rate Influence
              </Link>
            </div>
            <div className='geneTile'>
              <Link
                to={{
                  pathname: `/simulation/genes/${this.props.location.state.species}/pBi`,
                  key: 'pBi',
                  state: {
                    name: 'pBi',
                    listOfGenes: 'EFef',
                    speciesNumber: this.props.location.state.speciesNumber,
                    expressionValues: this.props.location.state
                      .expressionValues,
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
                Positive Breeding Influence
              </Link>
            </div>
            </Collapsible>

          </section>
        </div>
      );
    }
    return <div>{geneCategories}</div>;
  }
}

export default GeneHolder;
