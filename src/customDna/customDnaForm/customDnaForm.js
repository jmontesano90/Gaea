import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import './customDnaForm.css';
import DnaHelper from '../../dnaHelper';

class CustomDnaForm extends Component {
  state = {
    dnaStrand: 'AaBbCcDdEeFfKkLlMmNnOoPp',
  };

  setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  onChange = (e) => {
    let tempDna = this.setCharAt(
      this.state.dnaStrand,
      parseInt(e.target.name),
      e.target.value
    );
    this.setState({ dnaStrand: tempDna });
  };
  render() {
    return (
      <section className='homePage'>
        <h1>Custom Dna Form</h1>
        <p>
          Here you can construct your own DNA strand, and then inject it into
          the simulator and see how your plant performs! It is reccomended you
          wait until you're very comfortable understanding what is happening in
          the simulation normally before attempting this.{' '}
        </p>

        <h3>{this.state.dnaStrand}</h3>
        <Collapsible trigger='nGRi' className='customTrait'>
          <form action='idk'>
            <div className='geneTitle'>Gene 1</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label for='A'>
                  A
                  <input
                    type='radio'
                    value='A'
                    name='0'
                    onChange={this.onChange}
                  />
                </label>
                <label for='a'>
                  a
                  <input
                    type='radio'
                    value='a'
                    name='0'
                    onChange={this.onChange}
                  />
                </label>
              </span>
              <span className='genePair'>
                <label for='B'>
                  B
                  <input
                    type='radio'
                    value='B'
                    name='2'
                    onChange={this.onChange}
                  />
                </label>
                <label for='b'>
                  b
                  <input
                    type='radio'
                    value='b'
                    name='2'
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
            <div className='geneTitle'>Gene 2</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label for='A'>
                  A
                  <input
                    type='radio'
                    value='A'
                    name='1'
                    onChange={this.onChange}
                  />
                </label>
                <label for='a'>
                  a
                  <input
                    type='radio'
                    value='a'
                    name='1'
                    onChange={this.onChange}
                  />
                </label>
              </span>

              <span className='genePair'>
                <label for='B'>
                  B
                  <input
                    type='radio'
                    value='B'
                    name='3'
                    onChange={this.onChange}
                  />
                </label>
                <label for='b'>
                  b
                  <input
                    type='radio'
                    value='b'
                    name='3'
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
          </form>
          <Collapsible trigger='Trait explanation'>
            {DnaHelper.traitExplanation.nGRi}
          </Collapsible>
        </Collapsible>
        <Collapsible trigger='pGRi' className='customTrait'>
          <form action='idk'>
            <div className='geneTitle'>Gene 1</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label for='C'>
                  C
                  <input
                    type='radio'
                    value='C'
                    name='4'
                    onChange={this.onChange}
                  />
                </label>
                <label for='c'>
                  c
                  <input
                    type='radio'
                    value='c'
                    name='4'
                    onChange={this.onChange}
                  />
                </label>
              </span>

              <span className='genePair'>
                <label for='D'>
                  D
                  <input
                    type='radio'
                    value='D'
                    name='6'
                    onChange={this.onChange}
                  />
                </label>
                <label for='d'>
                  d
                  <input
                    type='radio'
                    value='d'
                    name='6'
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
            <div className='geneTitle'>Gene 2</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label for='C'>
                  C
                  <input
                    type='radio'
                    value='C'
                    name='5'
                    onChange={this.onChange}
                  />
                </label>
                <label for='c'>
                  c
                  <input
                    type='radio'
                    value='c'
                    name='5'
                    onChange={this.onChange}
                  />
                </label>
              </span>

              <span className='genePair'>
                <label for='D'>
                  D
                  <input
                    type='radio'
                    value='D'
                    name='7'
                    onChange={this.onChange}
                  />
                </label>
                <label for='d'>
                  d
                  <input
                    type='radio'
                    value='d'
                    name='7'
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
          </form>
          <Collapsible trigger='Trait explanation'>
            {DnaHelper.traitExplanation.pGRi}
          </Collapsible>
        </Collapsible>
        <Collapsible trigger='pBi' className='customTrait'>
          <form action='idk'>
            <div className='geneTitle'>Gene 1</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label for='E'>
                  E
                  <input
                    type='radio'
                    value='E'
                    name='8'
                    onChange={this.onChange}
                  />
                </label>
                <label for='e'>
                  e
                  <input
                    type='radio'
                    value='e'
                    name='8'
                    onChange={this.onChange}
                  />
                </label>
              </span>

              <span className='genePair'>
                <label for='F'>
                  F
                  <input
                    type='radio'
                    value='F'
                    name='10'
                    onChange={this.onChange}
                  />
                </label>
                <label for='f'>
                  f
                  <input
                    type='radio'
                    value='f'
                    name='10'
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
            <div className='geneTitle'>Gene 2</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label for='E'>
                  E
                  <input
                    type='radio'
                    value='E'
                    name='9'
                    onChange={this.onChange}
                  />
                </label>
                <label for='e'>
                  e
                  <input
                    type='radio'
                    value='e'
                    name='9'
                    onChange={this.onChange}
                  />
                </label>
              </span>

              <span className='genePair'>
                <label for='F'>
                  F
                  <input
                    type='radio'
                    value='F'
                    name='11'
                    onChange={this.onChange}
                  />
                </label>
                <label for='f'>
                  f
                  <input
                    type='radio'
                    value='f'
                    name='11'
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
          </form>
          <Collapsible trigger='Trait explanation'>
            {DnaHelper.traitExplanation.pBi}
          </Collapsible>
        </Collapsible>
        <Collapsible trigger='GR' className='customTrait'>
          <form action='idk'>
            <div className='geneTitle'>Gene 1</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label for='K'>
                  K
                  <input
                    type='radio'
                    value='K'
                    name='12'
                    onChange={this.onChange}
                  />
                </label>
                <label for='k'>
                  k
                  <input
                    type='radio'
                    value='k'
                    name='12'
                    onChange={this.onChange}
                  />
                </label>
              </span>

              <span className='genePair'>
                <label for='L'>
                  L
                  <input
                    type='radio'
                    value='L'
                    name='14'
                    onChange={this.onChange}
                  />
                </label>
                <label for='l'>
                  l
                  <input
                    type='radio'
                    value='l'
                    name='14'
                    onChange={this.onChange}
                  />
                </label>
              </span>
              <span className='genePair'>
                <label for='M'>
                  M
                  <input
                    type='radio'
                    value='M'
                    name='16'
                    onChange={this.onChange}
                  />
                </label>
                <label for='m'>
                  m
                  <input
                    type='radio'
                    value='m'
                    name='16'
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
            <div className='geneTitle'>Gene 2</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label for='K'>
                  K
                  <input
                    type='radio'
                    value='K'
                    name='13'
                    onChange={this.onChange}
                  />
                </label>
                <label for='k'>
                  k
                  <input
                    type='radio'
                    value='k'
                    name='13'
                    onChange={this.onChange}
                  />
                </label>
              </span>

              <span className='genePair'>
                <label for='L'>
                  L
                  <input
                    type='radio'
                    value='L'
                    name='15'
                    onChange={this.onChange}
                  />
                </label>
                <label for='l'>
                  l
                  <input
                    type='radio'
                    value='l'
                    name='15'
                    onChange={this.onChange}
                  />
                </label>
              </span>
              <span className='genePair'>
                <label for='M'>
                  M
                  <input
                    type='radio'
                    value='M'
                    name='17'
                    onChange={this.onChange}
                  />
                </label>
                <label for='m'>
                  m
                  <input
                    type='radio'
                    value='m'
                    name='17'
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
          </form>
          <Collapsible trigger='Trait explanation'>
            {DnaHelper.traitExplanation.GR}
          </Collapsible>
        </Collapsible>
        <Collapsible trigger='LS' className='customTrait'>
          <form action='idk'>
            <div className='geneTitle'>Gene 1</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label for='N'>
                  N
                  <input
                    type='radio'
                    value='N'
                    name='18'
                    onChange={this.onChange}
                  />
                </label>
                <label for='n'>
                  n
                  <input
                    type='radio'
                    value='n'
                    name='18'
                    onChange={this.onChange}
                  />
                </label>
              </span>

              <span className='genePair'>
                <label for='O'>
                  O
                  <input
                    type='radio'
                    value='O'
                    name='20'
                    onChange={this.onChange}
                  />
                </label>
                <label for='o'>
                  o
                  <input
                    type='radio'
                    value='o'
                    name='20'
                    onChange={this.onChange}
                  />
                </label>
              </span>
              <span className='genePair'>
                <label for='P'>
                  P
                  <input
                    type='radio'
                    value='P'
                    name='22'
                    onChange={this.onChange}
                  />
                </label>
                <label for='p'>
                  p
                  <input
                    type='radio'
                    value='p'
                    name='22'
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
            <div className='geneTitle'>Gene 2</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label for='N'>
                  N
                  <input
                    type='radio'
                    value='N'
                    name='19'
                    onChange={this.onChange}
                  />
                </label>
                <label for='n'>
                  n
                  <input
                    type='radio'
                    value='n'
                    name='19'
                    onChange={this.onChange}
                  />
                </label>
              </span>

              <span className='genePair'>
                <label for='O'>
                  O
                  <input
                    type='radio'
                    value='O'
                    name='21'
                    onChange={this.onChange}
                  />
                </label>
                <label for='o'>
                  o
                  <input
                    type='radio'
                    value='o'
                    name='21'
                    onChange={this.onChange}
                  />
                </label>
              </span>
              <span className='genePair'>
                <label for='P'>
                  P
                  <input
                    type='radio'
                    value='P'
                    name='23'
                    onChange={this.onChange}
                  />
                </label>
                <label for='p'>
                  p
                  <input
                    type='radio'
                    value='p'
                    name='23'
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
          </form>
          <Collapsible trigger='Trait explanation'>
            {DnaHelper.traitExplanation.LS}
          </Collapsible>
        </Collapsible>
      </section>
    );
  }
}

export default CustomDnaForm;
