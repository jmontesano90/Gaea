import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import './customDnaForm.css';
import DnaHelper from '../../dnaHelper';
import GridContext from '../../GridContext';

class CustomDnaForm extends Component {
  state = {
    dnaStrand: 'AaBbCcDdEeFfKkLlMmNnOoPp',
    comment: '',
    name: '',
  };
  static contextType = GridContext;

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

  commentChange = (e) => {
    this.setState({ comment: e.target.value });
  };
  nameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    let ngriStat =
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(0))[
          this.state.dnaStrand.charAt(0).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(1))[
          this.state.dnaStrand.charAt(1).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(2))[
          this.state.dnaStrand.charAt(2).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(3))[
          this.state.dnaStrand.charAt(3).toUpperCase()
        ]
      );

    let pgriStat =
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(4))[
          this.state.dnaStrand.charAt(4).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(5))[
          this.state.dnaStrand.charAt(5).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(6))[
          this.state.dnaStrand.charAt(6).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(7))[
          this.state.dnaStrand.charAt(7).toUpperCase()
        ]
      );

    let pbiStat =
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(8))[
          this.state.dnaStrand.charAt(8).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(9))[
          this.state.dnaStrand.charAt(9).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(10))[
          this.state.dnaStrand.charAt(10).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(11))[
          this.state.dnaStrand.charAt(11).toUpperCase()
        ]
      );

    let grStat =
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(12))[
          this.state.dnaStrand.charAt(12).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(13))[
          this.state.dnaStrand.charAt(13).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(14))[
          this.state.dnaStrand.charAt(14).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(15))[
          this.state.dnaStrand.charAt(15).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(16))[
          this.state.dnaStrand.charAt(16).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(17))[
          this.state.dnaStrand.charAt(17).toUpperCase()
        ]
      );

    let lsStat =
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(18))[
          this.state.dnaStrand.charAt(18).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(19))[
          this.state.dnaStrand.charAt(19).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(20))[
          this.state.dnaStrand.charAt(20).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(21))[
          this.state.dnaStrand.charAt(21).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(22))[
          this.state.dnaStrand.charAt(22).toUpperCase()
        ]
      ) +
      parseInt(
        DnaHelper.getDNAValues(this.state.dnaStrand.charAt(23))[
          this.state.dnaStrand.charAt(23).toUpperCase()
        ]
      );
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
        <input
          type='text'
          placeholder='Name of DNA'
          onChange={this.nameChange}
          id='dnaName'
        ></input>
        <Collapsible trigger='nGRi' className='customTrait'>
          <form action='idk'>
            <div>nGRi value: {ngriStat}</div>
            <div className='geneTitle'>Gene 1</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label htmlFor='A'>
                  A
                  <input
                    type='radio'
                    value='A'
                    name='0'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='a'>
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
                <label htmlFor='B'>
                  B
                  <input
                    type='radio'
                    value='B'
                    name='2'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='b'>
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
                <label htmlFor='A'>
                  A
                  <input
                    type='radio'
                    value='A'
                    name='1'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='a'>
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
                <label htmlFor='B'>
                  B
                  <input
                    type='radio'
                    value='B'
                    name='3'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='b'>
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
            <div>pGRi value: {pgriStat}</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label htmlFor='C'>
                  C
                  <input
                    type='radio'
                    value='C'
                    name='4'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='c'>
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
                <label htmlFor='D'>
                  D
                  <input
                    type='radio'
                    value='D'
                    name='6'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='d'>
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
                <label htmlFor='C'>
                  C
                  <input
                    type='radio'
                    value='C'
                    name='5'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='c'>
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
                <label htmlFor='D'>
                  D
                  <input
                    type='radio'
                    value='D'
                    name='7'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='d'>
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
            <div>pBi value: {pbiStat}</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label htmlFor='E'>
                  E
                  <input
                    type='radio'
                    value='E'
                    name='8'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='e'>
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
                <label htmlFor='F'>
                  F
                  <input
                    type='radio'
                    value='F'
                    name='10'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='f'>
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
                <label htmlFor='E'>
                  E
                  <input
                    type='radio'
                    value='E'
                    name='9'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='e'>
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
                <label htmlFor='F'>
                  F
                  <input
                    type='radio'
                    value='F'
                    name='11'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='f'>
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
            <div>GR value: {grStat}</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label htmlFor='K'>
                  K
                  <input
                    type='radio'
                    value='K'
                    name='12'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='k'>
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
                <label htmlFor='L'>
                  L
                  <input
                    type='radio'
                    value='L'
                    name='14'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='l'>
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
                <label htmlFor='M'>
                  M
                  <input
                    type='radio'
                    value='M'
                    name='16'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='m'>
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
                <label htmlFor='K'>
                  K
                  <input
                    type='radio'
                    value='K'
                    name='13'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='k'>
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
                <label htmlFor='L'>
                  L
                  <input
                    type='radio'
                    value='L'
                    name='15'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='l'>
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
                <label htmlFor='M'>
                  M
                  <input
                    type='radio'
                    value='M'
                    name='17'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='m'>
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
            <div>LS value: {lsStat}</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label htmlFor='N'>
                  N
                  <input
                    type='radio'
                    value='N'
                    name='18'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='n'>
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
                <label htmlFor='O'>
                  O
                  <input
                    type='radio'
                    value='O'
                    name='20'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='o'>
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
                <label htmlFor='P'>
                  P
                  <input
                    type='radio'
                    value='P'
                    name='22'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='p'>
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
                <label htmlFor='N'>
                  N
                  <input
                    type='radio'
                    value='N'
                    name='19'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='n'>
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
                <label htmlFor='O'>
                  O
                  <input
                    type='radio'
                    value='O'
                    name='21'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='o'>
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
                <label htmlFor='P'>
                  P
                  <input
                    type='radio'
                    value='P'
                    name='23'
                    onChange={this.onChange}
                  />
                </label>
                <label htmlFor='p'>
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
        <input
          type='text'
          placeholder='Input comments on your custom Dna Strand!'
          onChange={this.commentChange}
          id='dnaComment'
        ></input>
        <button
          type='button'
          onClick={() => this.context.updateCustomDna(this.state)}
        >
          {' '}
          Save values
        </button>
      </section>
    );
  }
}

export default CustomDnaForm;
