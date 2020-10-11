//Allows the user to create a custom DNA strand and save it to their account

import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import './customDnaForm.css';
import DnaHelper from '../../dnaHelper';
import GridContext from '../../GridContext';
import DnaApiService from '../../services/dna-api-service';

class CustomDnaForm extends Component {
  state = {
    dnaStrand: 'AaBbCcDdEeFfKkLlMmNnOoPp',
    comment: '',
    name: '',
    error: '',
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

  nameValidation() {
    if (this.state.name === '') {
      return 'Dna Strands must be named';
    }
  }

  saveValues = () => {
    if (this.state.name !== '') {
      DnaApiService.postDna(
        this.context.userId,
        this.state.name,
        this.state.dnaStrand,
        this.state.comment
      )
        .then(() => {
          this.context.handleUpdateDna();
        })
        .then(() => {
          this.props.history.push('/customDnaList');
        });
    } else {
      this.setState({ error: 'Name is required!' });
    }
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
    let dnaInfo1 = [
      {
        name: 'nGRi',
        geneList: ['A', 'a', 'B', 'b'],
        numberList: ['0', '1', '2', '3'],
        traitInfo: DnaHelper.traitExplanation.nGRi,
        stat: ngriStat,
      },
      {
        name: 'pGRi',
        geneList: ['C', 'c', 'D', 'd'],
        numberList: ['4', '5', '6', '7'],
        traitInfo: DnaHelper.traitExplanation.pGRi,
        stat: pgriStat,
      },
      {
        name: 'pBi',
        geneList: ['E', 'e', 'F', 'f'],
        numberList: ['8', '9', '10', '11'],
        traitInfo: DnaHelper.traitExplanation.pBi,
        stat: pbiStat,
      },
    ];
    let dnaInfo2 = [
      {
        name: 'GR',
        geneList: ['K', 'k', 'L', 'l', 'M', 'm'],
        numberList: ['12', '13', '14', '15', '16', '17'],
        traitInfo: DnaHelper.traitExplanation.GR,
        stat: grStat,
      },
      {
        name: 'LS',
        geneList: ['N', 'n', 'O', 'o', 'P', 'p'],
        numberList: ['18', '19', '20', '21', '22', '23'],
        traitInfo: DnaHelper.traitExplanation.LS,
        stat: lsStat,
      },
    ];
    let customInfo = dnaInfo1.map((data, index) => (
      <Collapsible trigger={data.name} className='customTrait'>
        <div className='SBG'>
          <form action='idk'>
            <div>
              {data.name} value: {data.stat}
            </div>
            <div className='geneTitle'>Gene 1</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label >
                  {data.geneList[0]}
                  <input
                    type='radio'
                    value={data.geneList[0]}
                    name={data.numberList[0]}
                    onChange={this.onChange}
                  />
                </label>
                <label >
                  {data.geneList[1]}
                  <input
                    type='radio'
                    value={data.geneList[1]}
                    name={data.numberList[0]}
                    onChange={this.onChange}
                  />
                </label>
              </span>
              <span className='genePair'>
                <label >
                  {data.geneList[2]}
                  <input
                    type='radio'
                    value={data.geneList[2]}
                    name={data.numberList[2]}
                    onChange={this.onChange}
                  />
                </label>
                <label >
                  {data.geneList[3]}
                  <input
                    type='radio'
                    value={data.geneList[3]}
                    name={data.numberList[2]}
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
            <div className='geneTitle'>Gene 2</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label >
                  {data.geneList[0]}
                  <input
                    type='radio'
                    value={data.geneList[0]}
                    name={data.numberList[1]}
                    onChange={this.onChange}
                  />
                </label>
                <label >
                  {data.geneList[1]}
                  <input
                    type='radio'
                    value={data.geneList[1]}
                    name={data.numberList[1]}
                    onChange={this.onChange}
                  />
                </label>
              </span>
              <span className='genePair'>
                <label >
                  {data.geneList[2]}
                  <input
                    type='radio'
                    value={data.geneList[2]}
                    name={data.numberList[3]}
                    onChange={this.onChange}
                  />
                </label>
                <label >
                  {data.geneList[3]}
                  <input
                    type='radio'
                    value={data.geneList[3]}
                    name={data.numberList[3]}
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
          </form>
          <Collapsible trigger='Trait explanation'>
            {data.traitInfo}
          </Collapsible>
        </div>
      </Collapsible>
    ));
    let customInfo2 = dnaInfo2.map((data, index) => (
      <Collapsible trigger={data.name} className='customTrait'>
        <div className='SBG'>
          <form action='idk'>
            <div>
              {data.name} value: {data.stat}
            </div>
            <div className='geneTitle'>Gene 1</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label >
                  {data.geneList[0]}
                  <input
                    type='radio'
                    value={data.geneList[0]}
                    name={data.numberList[0]}
                    onChange={this.onChange}
                  />
                </label>
                <label >
                  {data.geneList[1]}
                  <input
                    type='radio'
                    value={data.geneList[1]}
                    name={data.numberList[0]}
                    onChange={this.onChange}
                  />
                </label>
              </span>
              <span className='genePair'>
                <label >
                  {data.geneList[2]}
                  <input
                    type='radio'
                    value={data.geneList[2]}
                    name={data.numberList[2]}
                    onChange={this.onChange}
                  />
                </label>
                <label >
                  {data.geneList[3]}
                  <input
                    type='radio'
                    value={data.geneList[3]}
                    name={data.numberList[2]}
                    onChange={this.onChange}
                  />
                </label>
              </span>

              <span className='genePair'>
                <label >
                  {data.geneList[4]}
                  <input
                    type='radio'
                    value={data.geneList[4]}
                    name={data.numberList[4]}
                    onChange={this.onChange}
                  />
                </label>
                <label >
                  {data.geneList[5]}
                  <input
                    type='radio'
                    value={data.geneList[5]}
                    name={data.numberList[4]}
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
            <div className='geneTitle'>Gene 2</div>
            <div className='geneGroup'>
              <span className='genePair'>
                <label >
                  {data.geneList[0]}
                  <input
                    type='radio'
                    value={data.geneList[0]}
                    name={data.numberList[1]}
                    onChange={this.onChange}
                  />
                </label>
                <label >
                  {data.geneList[1]}
                  <input
                    type='radio'
                    value={data.geneList[1]}
                    name={data.numberList[1]}
                    onChange={this.onChange}
                  />
                </label>
              </span>
              <span className='genePair'>
                <label >
                  {data.geneList[2]}
                  <input
                    type='radio'
                    value={data.geneList[2]}
                    name={data.numberList[3]}
                    onChange={this.onChange}
                  />
                </label>
                <label >
                  {data.geneList[3]}
                  <input
                    type='radio'
                    value={data.geneList[3]}
                    name={data.numberList[3]}
                    onChange={this.onChange}
                  />
                </label>
              </span>
              <span className='genePair'>
                <label >
                  {data.geneList[4]}
                  <input
                    type='radio'
                    value={data.geneList[4]}
                    name={data.numberList[5]}
                    onChange={this.onChange}
                  />
                </label>
                <label >
                  {data.geneList[5]}
                  <input
                    type='radio'
                    value={data.geneList[5]}
                    name={data.numberList[5]}
                    onChange={this.onChange}
                  />
                </label>
              </span>
            </div>
          </form>
          <Collapsible trigger='Trait explanation'>
            {data.traitInfo}
          </Collapsible>
        </div>
      </Collapsible>
    ));
    return (
      <section className='homePage'>
        <h1 className='SBG'>Custom Dna Form</h1>
        <p>
          Here you can construct your own DNA strand, and then inject it into
          the simulator and see how your plant performs! It is reccomended you
          wait until you're very comfortable understanding what is happening in
          the simulation normally before attempting this.{' '}
        </p>

        <h3 className='SBG'>{this.state.dnaStrand}</h3>
        <input
          type='text'
          placeholder='Name of DNA'
          onChange={this.nameChange}
          id='dnaName'
        ></input>
        <div>{this.state.error}</div>
        {customInfo}
        {customInfo2}
        <input
          type='text'
          placeholder='Input comments on your custom Dna Strand!'
          onChange={this.commentChange}
          id='dnaComment'
        ></input>
        <button type='button' onClick={this.saveValues}>
          {' '}
          Save values
        </button>
      </section>
    );
  }
}

export default CustomDnaForm;
